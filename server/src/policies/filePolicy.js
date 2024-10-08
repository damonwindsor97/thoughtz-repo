const ApiError = require('../utils/ApiError')
const path = require('path')

// Check file exists
const filePayloadExists = (req, res, next) => {
    if(!req.files && !req.body.uploadedFile){
        return next(ApiError('No File uploaded'))
    }
    next()
}

// Check file size
const fileSizeLimiter = (req, res, next) => {
    const MB = 5; 
    const FILE_SIZE_LIMIT = MB * 1024 * 1024;

    if(req.files){
        const file = req.files.profile_image;
        if(file.size > FILE_SIZE_LIMIT){
            const message = `${file.name.toString()} is over the size limit of ${MB}mb`
            return next(ApiError(message))
        }
        next()
    }
}

// Check file extension
const fileExtLimiter = (allowedExtArray) => {
    return (req, res, next) => {
        if(req.files){
            const file = req.files.profile_image;
            const fileExtension = path.extname(file.name)

            const allowed =allowedExtArray.includes(fileExtension)
            if(!allowed){

                return next(ApiError.cannotProcess('Not permitted extension'))
            }
        }
        next()
    }
}

const filePolicy = {
    filePayloadExists,
    fileSizeLimiter,
    fileExtLimiter
}

module.exports = filePolicy