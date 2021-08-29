// build your `Resource` model here

const db = require('../../data/dbConfig')

const {projects, resources, resource_id, resource_name, tasks} = require('../../data/databaseConstants')

const getResource = async (id) => {
    if (id) {
        return db(resources).where(resource_id, id)
    } else {
        return db(resources)
    }
}

const getResourceByName = async (name) => {
    return db(resources).where(resource_name, name)
}

const postResource = async (resource) => {
    const post = await db(resources).insert(resource)
    return getResource(post)
}

module.exports = {
    getResource,
    getResourceByName,
    postResource
}