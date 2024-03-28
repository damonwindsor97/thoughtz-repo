const express = require('express')
const router = express.Router();

const AuthController = require('../controllers/authControllers')
const AuthPolicy = require('../policies/authPolicy')
const imageServerUpload = require('../middleware/imageServerUpload')

module.exports = () => {
    // GET - /api/auth/users
    router.get('/users', AuthController.listUsers);

    // POST - Register users: /api/auth/register
    router.post('/register', AuthPolicy.validateAuth, AuthController.register)

    // AUTH LOGIN - api/auth/login
    router.post('/login', AuthPolicy.validateAuth, AuthController.login)

    router.get('/:id', AuthController.getUserById)

    // AUTH PUT
    router.put('/profile/edit', imageServerUpload, AuthController.editProfile)

    return router
}