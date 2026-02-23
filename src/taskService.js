import Task from "../models/task.model.js";
import Step from "../models/step.model.js";


export async function getTaskWithSteps(taskId){
    const task = await Task.findById(taskId);

    if(!task){
        throw new Error("Task Not Found");

    }

    const steps = await Step.find({taskId:taskId}).sort(({stepNumber:1}));

    return {
        task,
        steps
    };
};