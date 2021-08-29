
const {getResource, getResourceByName} = require('./resource/model')

const { resource_id } = require("../data/databaseConstants")

const isPostResourceBodyValid = (req, res, next) => {

    const {resource_name = ''} = req.body

    const isResourceNameValid = resource_name && typeof resource_name === 'string'

    if (isResourceNameValid) {
        next()
    } else {
        res.status(400).json({message: "Invalid post body"})
    }

}

const findAllResources = async (req, res, next) => {
    try {
        const resource = await getResource()
        req.resource = resource
        next()
    } catch (err) {
        next(err)
    }
}

const isResourceNameUnique = async (req, res, next) => {

    const {resource_name} = req.body;

    if (!resource_name) res.status(400).json({message: "resource_name must be included"})

    try {
        const resource = await getResourceByName(resource_name)
        console.log(resource)
        if (resource) {
            next()
        } else {
            res.status(400).json({message: "resource_name is already in use"})
        }
    } catch(err) {
        next(err)
    }

}

module.exports = {
    isPostResourceBodyValid,
    findAllResources,
    isResourceNameUnique
}