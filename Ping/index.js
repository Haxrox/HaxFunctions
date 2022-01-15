module.exports = async function (context, req) {
    console.log("Ping!");
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Pong!"
    };
}