const express = require('express')
const router = express.Router();

const AuthController = require('../controllers/authControllers')
const AuthPolicy = require('../policies/authPolicy')

module.exports = () => {
    // GET - /api/auth/users
    router.get('/users', AuthController.listUsers);

    // POST - Register users: /api/auth/register
    router.post('/register', AuthPolicy.validateAuth, AuthController.register)

    // AUTH LOGIN - api/auth/login
    router.post('/login', AuthPolicy.validateAuth, AuthController.login)

    return router
}