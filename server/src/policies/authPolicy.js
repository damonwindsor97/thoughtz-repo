// This file upholds our Policies for Authentication
// By this we mean; Validating what the user can send through

const Joi = require('joi')
const ApiError = require('../utils/ApiError')
const debugJoi = require('debug')('app:joi')

module.exports = {
    // Set JOI Schema
    validateAuth(req, res, next){
        debugJoi(req.body)
        const schema = Joi.object({
            username: Joi.string().alphanum().min(3).max(30).allow(''),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } }).required(),
            password: Joi.string().pattern(new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\\W)|(?=.*_))^[^ ]+$')).required(),
            first_name: Joi.string().max(30),
            last_name: Joi.string().max(48),
            bio: Joi.string().max(256),
            profile_image: Joi.string()
        })
        
        // Call JOI to validate
        const { error, value } = schema.validate(req.body)

        // IF error, what type or error
        if(error){
            debugJoi(error)
            switch(error.details[0].context.key){
                case 'username':
                    next(ApiError.badRequest('You must provide a valid username'))
                    break
                
                case 'email':
                    next(ApiError.badRequest('You must provide a valid email'))
                    break

                case 'password': 
                next(ApiError.badRequest('You must provide a valid password'))
                break

                default: 
                next(ApiError.internalError('Invalid form data'))
                break
            }
        } else {
            next();
        }
    }
}