import mongoose from "mongoose";

const {Schema, model } = mongoose;

const taskSchema =  new Schema({
    title: String,
    description: String,
    completed: Boolean,
    dueDate: Date,
},{
    timestamps: true,
});

const Task = model('Task',taskSchema);

export default Task;