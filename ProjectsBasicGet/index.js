const ProjectsService = require("../Services/projectsService.js");

module.exports = async function (context, req) {
    await ProjectsService.getAllBasicProjects(context);
}