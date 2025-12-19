

function validateRequestBody(fields){
    return(req,res,next) =>{
         for(const field of fields){
        if(!req.body[field]){
            res.status(400).json({message:`Missing required field:${field}`});
            return;
        }
    }
    next();
    }
   
}

export {validateRequestBody};