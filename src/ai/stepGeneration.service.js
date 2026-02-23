import { generatePlan } from "./aiPlanning.Service.js";
import Step from "../../models/step.model.js";

export async function generateStepsForTask(task){

    try{
        

    const aiPlan = await generatePlan(task.goal,task.targetDate,task.pacing);

    const startDate = new Date(aiPlan.plan.startDate);

    const steps = aiPlan.steps.map((step)=>{
        
        
        const dayOffSet = parseInt(step.relativeTime.split(" ")[1],10);

        const dueDate = new Date(startDate);
        dueDate.setDate(dueDate.getDate() + dayOffSet);

        return{
            taskId : task._id,
            stepNumber : step.stepNumber,
            title : step.title,
            description : step.description,
            dueDate : dueDate,
            
        }

    });

    const createdSteps = await Step.insertMany(steps);
    task.status = "ready";
     await task.save();
    return createdSteps;
    }catch{
        task.status = "pending";
        await task.save();
        throw error;
        
    }
    
}

// export async function generateAndSaveSteps(aiPlan, taskId){

//      const startDate = new Date(aiPlan.plan.startDate);
     
     

//      const stepDocuments = aiPlan.steps.map((step)=>{

//         const relativeParts = step.relativeTime.split(" ");
//         const offset = parseInt(relativeParts[1],10);
        
//         const scheduleDate = new Date(startDate);

//         scheduleDate.setDate(
//             scheduleDate.getDate + offset
//         );
//         return{
//             task: taskId,
//             stepNumber: step.stepNumber,
//             title: step.title,
//             description: step.description,
//             scheduleDate
//         }


//      });

//      const createdSteps = await Step.insertMany(stepDocuments);
//      return createdSteps;
// }
