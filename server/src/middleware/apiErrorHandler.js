const ApiError = require('../utils/ApiError')


function apiErrorHandler(err, req, res, next){
    if(err instanceof ApiError){
        res.status(err.code).json(err.message)
        return
    } else {
        console.error(err);
        res.status(500).json({ message: 'Oops! Something went wrong - try again later'})
    }

}

module.exports = apiErrorHandler;