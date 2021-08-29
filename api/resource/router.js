// build your `/api/resources` router here

const {isPostResourceBodyValid} = require('../middleware')

const {postResource, getResource} = require('./model')

const express = require('express')

const router = express.Router()

router.post('/', isPostResourceBodyValid, async (req, res) => {
    
    try {
        const post = await postResource(req.body)
        res.status(201).json(post)
    } catch(err) {
        next(err)
    }
    
})

router.get('/', async (req, res) => {
    try {
        const resource = await getResource()
        res.status(200).json(resource)
    } catch (err) {
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