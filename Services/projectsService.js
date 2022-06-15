const PROJECTS_DATA = require("./projectsData.js");
const DatabaseError = require("../Error/DatabaseError.js");

class ProjectService {
    async getAllProjects(context) {
        context.res.status(200).json(PROJECTS_DATA);
    }

    async getAllBasicProjects(context) {
        const response = [];
        
        PROJECTS_DATA.forEach(project => response.push({
            title: project.title,
            data: project.date,
            type: project.type,
            shortDescription: project.shortDescription,
            techStack: project.techStack,
            url: project.url
        }));

        context.res.status(200).json(response);
    }

    async getDetailedProject(context) {
        try {
            const project = req.params.name ? PROJECTS_DATA.filter(project => project.title.toUpperCase() === context.req.params.name.toUpperCase())[0] : req.params.index ? PROJECTS_DATA[index] : null;

            if (project) {
                throw new DatabaseError(`Project: ${context.req.params.name} not found in database`);
            }   

            context.res.status(200).json(project);
        } catch (exception) {
            context.res.status(404).send(exception);
        }
    }
}

module.exports = new ProjectService();