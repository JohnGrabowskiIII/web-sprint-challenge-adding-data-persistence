
const {getResource, getResourceByName} = require('./resource/model')

const {getProject} = require('./project/model')

const {getTask} = require('./task/model')

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

    console.log(`Post Project ${!isValid}`)

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

const convertCompletedIntToBool = completed => {
    const body = completed

    if (body.project_completed === 0 || body.project_completed === 1) {
        return {...body,
            project_completed: body.project_completed ?
                true :
                false}
    } else {
        return {...body,
            task_completed: body.task_completed ?
                true :
                false}
    }

}

const convertArrayCompletedToBool = array => {
    return array.map(cb => {
        return convertCompletedIntToBool(cb)
    })
}

const findAllTasks = async (req, res, next) => {
    try {
        const task = await getTask()
        req.task = task
        next()
    } catch (err) {
        next(err)
    }
}

// CHANGE EDIT CHANGE EDIT
const isPostTaskBodyValid = async (req, res, next) => {

    const {task_description, task_completed} = req.body

    const isDescriptionValid = task_description && typeof task_description === 'string'

    const isCompletedValid = task_completed === true || task_completed === false

    const isValid = isDescriptionValid && isCompletedValid

    console.log(`Post task ${!isValid}`)

    if (!isValid) {
        console.log("inside if, should not log")
        res.status(400).json({message: "Post body is invalid"})
    }

    next()

}

module.exports = {
    isPostResourceBodyValid,
    findAllResources,
    isResourceNameUnique,
    isPostProjectBodyValid,
    findAllProjects,
    convertCompletedIntToBool,
    convertArrayCompletedToBool,
    findAllTasks,
    isPostTaskBodyValid
}