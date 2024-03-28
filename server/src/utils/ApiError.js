class ApiError {
      // CLASS PROPERTIES: Properties to be passed in as paramenters/arguments
    constructor(code, message, err){
        this.code = code;
        this.message = message;
        this.err = err;
    }

    // 400 - Bad Request
    static badRequest(message){
        return new ApiError(400, `Bad Request: ${message}`)
    }

    // 404  - Not Found
    static notFound(){
        return new ApiError(404, `Resource Not Found`)
    }

    // 413 Entity too large
    static tooLarge(message){
        return new ApiError(413, `Upload failed: ${message}`)
    }

    // 422 Unprocessable Entity
    static cannotProcess(message){
        return new ApiError(422, `Upload failed: ${message}`)
    }

    // 500  - Internal Server Error
    static internalError(message, err){
        console.error(err);
        return new ApiError(500, `Internal Server Error: ${message}`)
    }
}

module.exports = ApiError;