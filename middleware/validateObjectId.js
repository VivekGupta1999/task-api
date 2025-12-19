import mongoose from "mongoose";
function validateObjectId(req,res,next
){
    const id = req.params.id;
    if(!id){
        res.status(400).json({message:"missing required parameter"})
        return;
    }
    const result = mongoose.isValidObjectId(id);

    if(!result){
        res.status(400).json({message:"Invalid Object Id"});
        return;
    }

    next();

    
};
export  {validateObjectId};