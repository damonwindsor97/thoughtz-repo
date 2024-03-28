const { db } = require('../config/db')
const ApiError = require('../utils/ApiError')
const { findUser, hashPassword, userDetailsToJSON, jwtSignUser,comparePassword } = require('../utils/AuthServices')
const {storageBucketUpload} = require('../utils/bucketServices')
const debugREAD = require('debug')('app:read')
const debugWRITE = require('debug')('app:write')

require('dotenv').config()
const config = require('../config/config')

module.exports = {
    // GET Users
    async listUsers(req, res, next){
        // Store the Doc query in Var & call GET method
        const usersRef = db.collection('users');
        const snapshot = await usersRef.get();

        if (snapshot.empty){
            return next(ApiError.badRequest('The users you are looking for do not exist'))

        } else {
            let users = [];
            snapshot.forEach(doc => {
                users.push({
                    id: doc.id,
                    username: doc.data().username,
                    email: doc.data().email,
                    first_name: doc.data().first_name,
                    last_name: doc.data().last_name,
                    bio: doc.data().bio,
                    profile_image: doc.data().profile_image,
                    cover_image: doc.data().cover_image,
                    isAdmin: doc.data().isAdmin
                })
            })
            res.send(users)
        }
    },

    // POST User
    async register(req, res, next){
        try {
            const {username, email, password} = req.body;

            // Check if there is already an email in use
            const emailMatch = await findUser(email)
            // if there is 1, then...
            if(emailMatch.length === 1){
                return next(ApiError.badRequest('This email is already in use'))
            }

            //  Check if username is already in use
            const userMatch = await findUser(username)
            if(userMatch.length === 1){
                return next(ApiError.badRequest("This username is already in use"))
            }

            // All good? the Users data can now be saved to the database
            // The empty Strings are so users can Update them at a later date, OPTIONALLY
            const usersRef = db.collection('users');
            const response = await usersRef.add({
                username: username,
                email: email,
                password: await hashPassword(password),
                first_name: "",
                last_name: "",
                bio: "",
                profile_image: "",
                cover_image: "",
                isAdmin: false
            })
            console.log(`Successful register - User: ${response.id}`)

            // Convert user details to JSON using re-factored function
            const userJSON = await userDetailsToJSON(response.id);

            // Return  token
            res.send({
                token: jwtSignUser(userJSON)
            })
        } catch (error) {
            return next(ApiError.internalError('Your profile could not be registered', error))
        }
    },

    // POST User 
    async login(req, res, next){
        try {
            const { email, password } = req.body;

            // Looking for a matching email OR username = existing user = good
            const emailMatch = await findUser(email);
            // if there is 1, then...
            if(emailMatch.length === 0){
                return next(ApiError.badRequest('Incorrect Credentials'))
            };

            // Authenticate existing user with password check
            const passwordMatch = await comparePassword(emailMatch, password);
            if(!passwordMatch){
                return next(ApiError.badRequest('Incorrect Credentials'))
            }

            // User is all good to go; issue user object & token to client
            console.log(`Success - User: ${emailMatch[0.].id} is logged in`)
            const userJSON = await userDetailsToJSON(emailMatch[0].id);

            // Return token
            res.send({
                token: jwtSignUser(userJSON)
            });

        } catch (error) {
            return next(ApiError.internalError('Your profile couldnt not be logged into', error));
        }
    },

    // GET User
    async getUserById(req, res, next){
        debugREAD(req.params.id)
        try {
            // Store reference to the document, then query it
            const userRef = db.collection('users').doc(req.params.id)
            const doc = await userRef.get();

            // 400 Error Check
            // Does the document not exist
            if(!doc.exists){
                return next(ApiError.badRequest('The User you were looking for does not exist'))
            } else {
                res.send(doc.data());
            }
            
        } catch (error) {
            return next(ApiError.internalError('Your request could not be processed', error));
        }
    },


    // PUT User
    async editProfile(req, res, next){
        debugWRITE(req.body)
        debugWRITE(req.files)
        debugWRITE(req.locals)
        try {
            res.send('Edit Profile')
        
        } catch (error) {
            return next(ApiError.internalError('Your request could not be made at this time', error))
        }
    }
}