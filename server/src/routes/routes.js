const express = require('express');
const router = express.Router()

const authRoutes = require('./authRoutes')

module.exports = () => {
    router.get('/', (req, res, next) => {
        res.send("thoughtz API")
    })


    // Our authentication routes
    router.use('/auth', authRoutes());



    return router
}