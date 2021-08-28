// build your `/api/resources` router here

const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    res.status(200).json({message: "Post route's to /api/resources"})
})

router.get('/', (req, res) => {
    res.status(200).json({message: "Get routes to /api/resources"})
})

module.exports = router