function errorHandler(error,req,res,next){
    const statusCode = error.statusCode || 500 ;
    const statusMessage = error.message;

    res.status(statusCode).json({
        success:false,
        message:statusMessage || "Internal Server Error",
    });


}

export default errorHandler;