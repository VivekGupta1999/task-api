import mongoose from "mongoose";

const {Schema, model } = mongoose;


const taskSchema = new Schema({
    goal: {
        type: String,
        required:true
    },
    targetDate: {
        type:Date,
        required: true
    },
    pacing:{
        type:String,
        enum: ["Daily","Weekly"],
        required:true
    },
    status:{
        type:String,
        enum:["pending","generating","ready","failed"],
        default:"pending"
    },
    retryCount:{
        type:Number,
        default:0
    },
    lastAttemptAt:{
        type:Date
    },
    errorMessage:{
        type:String
    }
},{
    timestamps: true
});



const Task = model('Task',taskSchema);

export default Task;