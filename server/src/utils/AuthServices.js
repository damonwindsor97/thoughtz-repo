const {db} = require('../config/db')
const config = require('../config/config')
const debugAuth = require('debug')('app:authServices')

const bcrypt = require('bcrypt')
const _ = require('lodash')
const jwt = require('jsonwebtoken')

module.exports = {
    async findUser(email, username){
        // Block emails that match
        const usersRef = db.collection('users');
        const snapshot = await usersRef.get();

        if (snapshot.empty){
            return next(ApiError.badRequest('The users you are looking for do not exist'))
        }
        let users = [];
        snapshot.forEach(doc => {
            users.push({
                id: doc.id,
                username: doc.data().username,
                email: doc.data().email,
                password: doc.data().password,
                first_name: doc.data().first_name,
                last_name: doc.data().last_name,
                bio: doc.data().bio,
                profile_image: doc.data().profile_image,
                cover_image: doc.data().cover_image,
                isAdmin: doc.data().isAdmin
            })
        })
        // Now search for a duplicate email
        // Does the email aubmitted by the user match an already users email
        const emailMatch = users.filter(user => email === user.email)
    
        // Search for duplicate username
        // const userMatch = users.filter(user => username === user.username)
        
        return emailMatch
    },

    async hashPassword(password){
        const saltRounds = 10;
        // Encrypt password - VERY IMPORTANT!!
        const salt = await bcrypt.genSalt(saltRounds);
        // hashing password, then adding salt to the end of it
        const hashPassword = await bcrypt.hash(password, salt)
        return hashPassword;
    },


    async comparePassword(user, password){
        // Storing password from database
        const hashPassword = user[0].password;
        // Compare both passwords using Bcrypt
        const passwordMatch = await bcrypt.compare(password, hashPassword);
        return passwordMatch;
    },

    async userDetailsToJSON(id){
        const usersRef = db.collection('users');
        // Convert the details to JSON and remove password
        // Making request to users collection, getting specific doc back that we saved (this is how we retrieve docs from Firebase)
        const user = await usersRef.doc(id).get();
        
        // create prop called ID, retrieve ID from the doc, then copy the rest of the data inside the doc
        // Then remove the possword (2nd arg is the delete/remove)
        const userJSON = _.omit(
            { id: id, ...user.data() },
            'password'
        );
        debugAuth(userJSON)
        return userJSON;
    },

    jwtSignUser(user){
        // Mint and return the user object + the token without the password
        const payload = user;
        const secret = config.authentication.JWT_SECRET;
        const tokenExpireTime = 60 * 60 * 24;
        // the JWT signing for token takes all 3 parameters
        const token = jwt.sign( payload, secret, {expiresIn: tokenExpireTime})

        return token
    }
}