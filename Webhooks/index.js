const {WebhookClient, MessageEmbed} = require('discord.js');
const Configuration = require("./config.json");

const webhookClient = new WebhookClient({ url: Configuration.WEBHOOK_URL});

module.exports = async function (context, req) {
    const userAgent = req.headers["user-agent"] || req.headers["User-Agent"] || req.headers["user-Agent"] || ""; // unsure about casing
    var event = req.headers["x-github-event"];
    
    if (!userAgent.toUpperCase().startsWith("GITHUB-HOOKSHOT")) {
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "Invalid user agent"
        };
        return;
    } 

    if (event == null) {
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "Invalid event"
        };
        return;
    } 

    if (!(req.body && req.body.repository)) {
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "Invalid body"
        };
        return;
    } 

    const branch = req.body.ref != null ? req.body.ref.slice(11) : req.body.repository.default_branch;
    const embed = new MessageEmbed()
        .setAuthor({name: req.body.repository.full_name || "Github Repository", iconURL: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: req.body.repository.html_url || "https://github.com/"})
        .setTitle("Webhook")
        .setURL(`${req.body.repository.html_url}/tree/${branch}` || "https://github.com/")
        .setDescription("Test")
        .setTimestamp(req.body.pushed_at || Date.now())
        .setFooter({text: `Sender: ${req.body.sender.login || "Anonymous"}`, iconURL: req.body.sender.avatar_url});

    event = event.toUpperCase();
    if (event == "PING") {
        embed.setTitle("Ping")
            .setDescription(req.body.zen || "Rip zen")
            .setColor('#cacaca');
    } else if (event == "PUSH") {
        if (req.body.commits) {
            if (req.body.commits.length <= 0) {
                context.res = {
                    status: 200,
                    body: "Success"
                };
                return;
            }
            var commits = "";
            req.body.commits.forEach(commit => {
                const timestamp = new Date(commit.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: "PST" });
                const commitIDString = `[\`${commit.id.slice(0, 6)}\`](${commit.url})`;
                const committerString =  `[${commit.committer.name}](https://github.com/${commit.committer.username})`
                commits = commits.concat(`**[${timestamp}] ${commitIDString}: ${committerString}** - ${commit.message}\n`);
            });
            embed.setTitle(`${branch}: ${req.body.commits.length} new commit(s)`)
                .setDescription(commits)
                .setColor("#3498db");
        } else {
            embed.setTitle("Unknown push event")
                .setDescription(`**Action:** ${req.body.action}\n**Ref:** ${req.body.ref}\n**Ref_type:** ${req.body.ref_type}`)
                .setColor("#dd2e44");
        }
    } else if (event == "CREATE" || event == "DELETE") {
        if (req.body.ref_type && req.body.ref_type.toUpperCase() == "BRANCH") {
            embed.setTitle(`Branch ${event.toLowerCase()}d`)
                .setDescription(`**Branch: [\`${req.body.ref}\`](${req.body.html_url}/tree/${req.body.ref})**`)
                .setColor(event == "CREATE" ? "#78b159" : "#dd2e44");
        } else {
            embed.setTitle(`Unknown ${event.toLowerCase()} event`)
                .setDescription(`**Action:** ${req.body.action}\n**Ref:** ${req.body.ref}\n**Ref_type:** ${req.body.ref_type}`)
                .setColor("#dd2e44");
        }
    } else {
        embed.setTitle("Unknown event")
            .setDescription(`**Event:** ${event}\n**Action:** ${req.body.action}\n**Ref:** ${req.body.ref}\n**Ref_type:** ${req.body.ref_type}`)
            .setColor("#dd2e44");
    }

    /**
     * response[0] = status code
     * response[1] = status message
     */
    const response = await webhookClient.send({embeds: [embed]}).then(() => {
        return [200, "Successfully sent"];
    }).catch((error) => {
        console.log(error);
        return [500, "Failed to send"]
    });

    context.res = {
        status: response[0],
        body: response[1]
    }
}