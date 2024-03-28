const ApiError = require('../utils/ApiError')
const debugWRITE = require('debug')('app:write')
const path = require('path')

const imageServerUpload = (req, res, next) => {
    // Check if a file is uploaded
    if(req.files){
        // store the file in local variable
        const file = req.files.image
        debugWRITE(req.files)
        debugWRITE(`Image for server processing: ${file.name}`)

        // Append unique file ID
        // Attach date to front of file name
        const filename = Date.now() + '_' + file.name;
        debugWRITE(`Unique filename: ${filename}`)

        // declare server storage path
        const uploadPath = path.join(
            _dirname, 
            '../../public/uploads/',
            filename
        );

        // Move the file to the diretory, then rename
        file
        .mv(uploadPath)
        .then(() => {
            console.log(`Server Upload Successful: ${uploadPath}`)
            res.locals.filename = filename;
            next();
        })
        .catch(error => {
            if(error) return next(ApiError.internalError('Your image request could not be processed at this time', error))
        })
    } else {
        next()
    }
}

module.exports = imageServerUpload