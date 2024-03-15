const express = require('express')
const router = express.Router();

const AuthController = require('../controllers/authControllers')

module.exports = () => {
    // GET - /api/auth/users
    router.get('/users', AuthController.listUsers);

    // POST - Register users: /api/auth/register
    router.post('/register', AuthController.register)

    // AUTH LOGIN - api/auth/login
    router.post('/login', AuthController.login)

    return router
}