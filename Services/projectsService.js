const PROJECTS_DATA = require("./projectsData.js");

class ProjectService {
    async getAllProjects(context) {
        return PROJECTS_DATA
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
            const project = PROJECTS_DATA.filter(project => project.title.toUpperCase() === context.)
        }
    }
}

module.exports = ProjectService();