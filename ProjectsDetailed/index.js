const ProjectsService = require("../services/projectsService.js");

module.exports = async function (context, req) {
    await ProjectsService.getDetailedProject(context);
}