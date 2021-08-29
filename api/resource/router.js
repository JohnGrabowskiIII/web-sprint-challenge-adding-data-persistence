// build your `/api/resources` router here

const {isPostResourceBodyValid, findAllResources} = require('../middleware')

const {postResource, getResource} = require('./model')

const express = require('express')

const router = express.Router()

router.post('/', isPostResourceBodyValid, async (req, res) => {
    
    try {
        const post = await postResource(req.body)
        res.status(201).json(post[0])
    } catch(err) {
        next(err)
    }
    
})

router.get('/', findAllResources, (req, res) => {

    res.status(200).json(req.resource)
    
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router