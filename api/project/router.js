// build your `/api/projects` router here

const {isPostProjectBodyValid} = require('../middleware')

const {postProject} = require('./model')

const express = require('express')

const router = express.Router()

const convertCompletedIntToBool = completed => {
    const body = completed[0]
    return {...body,
        project_completed: body.project_completed ?
            true :
            false}
}

router.post('/', isPostProjectBodyValid, async (req, res, next) => {
    
    try {
        const post = await postProject(req.body)
        const convertedPost = convertCompletedIntToBool(post)
        res.status(201).json(convertedPost)
    } catch(err) {
        next(err)
    }

})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router