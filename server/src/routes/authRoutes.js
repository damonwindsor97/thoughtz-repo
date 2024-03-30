const express = require('express')
const router = express.Router();

const AuthController = require('../controllers/authControllers')
const AuthPolicy = require('../policies/authPolicy')
const imageServerUpload = require('../middleware/imageServerUpload')
const FilePolicy = require('../policies/filePolicy')

module.exports = () => {
    // GET - /api/auth/users
    router.get('/users', AuthController.listUsers);

    // POST - Register users: /api/auth/register
    router.post('/register', AuthPolicy.validateAuth, AuthController.register)

    // AUTH LOGIN - api/auth/login
    router.post('/login', AuthPolicy.validateAuth, AuthController.login)

    // api/auth/user/:id
    router.get('/user/:id', AuthController.getUserById)

    // AUTH PUT - api/auth/user/edit/:id
    router.put('/user/edit/:id', 
        [AuthPolicy.validateAuth, 
        FilePolicy.fileExtLimiter(['.png', '.jpg', '.jpeg', '.gif']), 
        imageServerUpload], AuthController.putUserById)

    return router
}