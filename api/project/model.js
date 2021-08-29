// build your `Project` model here

const db = require('../../data/dbConfig')

const {projects, project_id, project_name} = require('../../data/databaseConstants')

const getProject = async (id) => {
    if (id) {
        return db(projects).where(project_id, id)
    } else {
        return db(projects)
    }
}

// TESTS DOES NOT CHECK FOR THIS
// CANNOT GET TO WORK IN MIDDLEWARE WITH TESTS
// ALTHOUGH TESTING MANUALLY IT SEEMS TO WORK
// const getProjectByName = async (name) => {
//     return db(projects).where(project_name, name)
// }

const postProject = async (project) => {
    const post = await db(projects).insert(project)
    return getProject(post)
}

module.exports = {
    getProject,
    // getProjectByName,
    postProject
}