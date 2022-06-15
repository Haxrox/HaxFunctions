const ProjectsService = require("../Services/projectsService.js");

module.exports = async function (context, req) {
    await ProjectsService.getDetailedProject(context);
}