import mongoose from "mongoose";


const {Schema,model} = mongoose;

const stepSchema = new Schema({
    taskId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Task"
    },
    stepNumber:Number,
    title:String,
    description:String,
    dueDate:Date,
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const Step = model("Step",stepSchema);

export default Step;