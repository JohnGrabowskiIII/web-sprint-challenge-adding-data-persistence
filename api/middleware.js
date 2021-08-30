
const {getResource, getResourceByName} = require('./resource/model')

const {getProject} = require('./project/model')

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
        if (resource) {
            next()
        } else {
            res.status(400).json({message: "resource_name is already in use"})
        }
    } catch(err) {
        next(err)
    }

}

const isPostProjectBodyValid = async (req, res, next) => {

    const {project_name, project_completed} = req.body

    const isNameValid = project_name && typeof project_name === 'string'

    const isCompletedValid = project_completed === true || project_completed === false

    const isValid = isNameValid && isCompletedValid

    console.log(!isValid)

    if (!isValid) {
        res.status(400).json({message: "Post body is invalid"})
    }

    next()

}

const findAllProjects = async (req, res, next) => {
    try {
        const project = await getProject()
        req.project = project
        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {
    isPostResourceBodyValid,
    findAllResources,
    isResourceNameUnique,
    isPostProjectBodyValid,
    findAllProjects
}