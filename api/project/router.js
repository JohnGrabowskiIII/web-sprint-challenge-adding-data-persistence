// build your `/api/projects` router here

const {isPostProjectBodyValid} = require('../middleware')

const express = require('express')

const router = express.Router()

router.post('/', (req, res) => {
    res.status(200).json({message: "Post routing to /api/projects working"})
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router