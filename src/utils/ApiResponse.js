class ApiResponse {
    constructor(res) {
        this.res = res;
    }

    success(statusCode = 200, data, message = "Success") {
        this.statusCode = statusCode;
        this.data= data;
        this.message = message;
        this.success=statusCode<400;
    }

    error(message = "Internal Server Error", statusCode = 500) {
        this.res.status(statusCode).json({
            success: false,
            message
        });
    }
}

export { ApiResponse };
