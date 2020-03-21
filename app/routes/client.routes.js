"use strict"

const express = require('express')
const router = express.Router()
const path = require('path')
const contentPath = path.join(__dirname, '../../content')

// frontend routes =========================================================

// route to handle all angular client state URL requests (regex matches URL with no file extension, query OK)

// If URL has '/' or '/anon/', redirect to client.secondary module
router.get(/^(\/|\/anon\/([^\.\?]*|[^\?]*\/[^\.\?]*))(\?.*)?$/, (req, res, next) => {
    res.sendFile('secondary.html', {
        root: contentPath
    })
})

// route to handle all angular client state URL requests (regex matches URL with no file extension, query OK)
router.get(/^\/([^\.\?]*|[^\?]*\/[^\.\?]*)(\?.*)?$/, (req, res, next) => {
    res.sendFile('main.html', {
        root: contentPath
    })
})

// Handle Static File 404
router.use(function (err, req, res, next) {
    if (err) console.error
    res.sendStatus(404)
})

module.exports = router
