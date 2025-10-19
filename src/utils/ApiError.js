class Api extends Error {
    constructor(
        message="Internal Server Error",
        statusCode=500,
        error=[],
        stack=""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.data=null;
        this.message=message;
        this.success=false;
        this.errors=errors;
        if (stack) {
            this.stack = stack;
        }else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiError};
