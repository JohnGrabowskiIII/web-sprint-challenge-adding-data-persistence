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
        res.status(500).json(err)
    }
    
})

router.get('/', async (req, res) => {
    try {
        const resource = await getResource()
        res.status(200).json(resource)
    } catch (err) {
        res.status(500).json(err)
    }
    
})

module.exports = router