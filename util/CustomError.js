class CustomError extends Error{
    constructor(statusCode,statusMessage){
        super(statusMessage);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)
    }
}

export default CustomError;