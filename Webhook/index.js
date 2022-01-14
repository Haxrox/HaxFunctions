const {WebhookClient, MessageEmbed} = require('discord.js');

const webhookClient = new WebhookClient({ url: "https://discord.com/api/webhooks/931337902179385414/v4UTEXoneseXp5EzzM894qgEGbF2D6Gxa6RBWCWDS24KIevQpHe38gjBqufvr46c9IVv"});

module.exports = async function (context, req) {
    /*
    context.log('JavaScript HTTP trigger function processed a request.');

    console.log("----- [ Context ] -----");
    console.log(context);

    console.log("----- [ Req ] -----");
    console.log(req);
    */
    const userAgent = req.headers["user-agent"] || req.headers["User-Agent"] || req.headers["user-Agent"] || ""; // unsure about casing

    console.log("User Agent: " + userAgent);
    
    if (userAgent.toUpperCase().startsWith("GITHUB-HOOKSHOT")) {
        if (req.body && req.body.repository) {
            const embed = new MessageEmbed()
            .setAuthor({name: req.body.repository.name || "Github Repository", iconURL: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", url: req.body.repository.html_url || "https://github.com/"})
            .setTitle("Webhook")
            .setURL(req.body.repository.html_url || "https://github.com/")
            .setDescription("Test")
            .setTimestamp(req.body.pushed_at || Date.now())
            .setFooter({text: `Sender: ${req.body.sender.login || "Anonymous"}`, iconURL: req.body.sender.avatar_url});
            
            if (req.body.zen) {
                embed.setTitle("Ping")
                .setDescription(req.body.zen)
                .setColor('#cacaca')
            }

            /**
             * response[0] = status code
             * response[1] = status message
             */
            const response = await webhookClient.send({embeds: [embed]}).then(() => {
                return [200, "Successfully sent"];
            }).catch((error) => {
                console.error(error);
                return [500, "Failed to send"]
            });

            context.res = {
                status: response[0],
                body: response[1]
            }
        } else {
            context.res = {
                status: 400, /* Defaults to 200 */
                body: "Invalid body"
            };
        }
    } else {
        context.res = {
            status: 400, /* Defaults to 200 */
            body: "Invalid user agent"
        };
    }
}