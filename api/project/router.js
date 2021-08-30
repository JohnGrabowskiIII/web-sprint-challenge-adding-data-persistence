// build your `/api/projects` router here

const {isPostProjectBodyValid,
    findAllProjects,
    convertCompletedIntToBool,
    convertArrayCompletedToBool} = require('../middleware')

const {postProject} = require('./model')

const express = require('express')

const router = express.Router()

// RECIEVES "MESSAGE": "POST BODY IS INVALID" IN THE TESTS
router.post('/', isPostProjectBodyValid, async (req, res, next) => {
    
    try {
        const post = await postProject(req.body)
        const convertedPost = convertCompletedIntToBool(post[0])
        res.status(201).json(convertedPost)
    } catch(err) {
        next(err)
    }

})

router.get('/', findAllProjects, (req, res) => {
    const convertedProjects = convertArrayCompletedToBool(req.project)
    res.status(200).json(convertedProjects)  
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router