// build your `/api/tasks` router here

const {findAllTasks, isPostTaskBodyValid, convertCompletedIntToBool, convertArrayCompletedToBool} = require('../middleware')

const {postTask} = require('./model')

const express = require('express')

const router = express.Router()

router.get('/', findAllTasks, (req, res) => {
    const convertedTasks = convertArrayCompletedToBool(req.task)
    res.status(200).json(convertedTasks)
})

router.post('/', isPostTaskBodyValid, async (req, res, next) => {

try {
    const post = await postTask(req.body)
    const convertedPost = convertCompletedIntToBool(post[0])
    res.status(201).json(convertedPost)
} catch(err) {
    next(err)
}

})

module.exports = router

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})