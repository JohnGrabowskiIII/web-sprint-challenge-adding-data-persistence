// build your `Project` model here

const db = require('../../data/dbConfig')

const {projects, project_id, project_name} = require('../../data/databaseConstants')

const getProjectByName = async (name) => {
    return db(projects).where(project_name, name)
}

module.exports = {
    getProjectByName
}