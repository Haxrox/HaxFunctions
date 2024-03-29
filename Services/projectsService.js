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
            date: project.date,
            type: project.type,
            shortDescription: project.shortDescription,
            techStack: project.techStack,
            url: project.url
        }));

        context.res.status(200).json(response);
    }

    async getDetailedProject(context) {
        try {
            const project = context.req.params.name ? PROJECTS_DATA.filter(project => project.title.toUpperCase() === context.req.params.name.toUpperCase())[0] : context.req.params.index ? PROJECTS_DATA[context.req.params.index] : null;

            if (project) {
                context.res.status(200).json(project);
            } else {
                context.res.status(404).send(new DatabaseError(`Project: ${context.req.params.name} or ${context.req.params.index} not found in database`));
            }
        } catch (exception) {
            context.res.status(500).send(exception);
        }
    }
}

module.exports = new ProjectService();