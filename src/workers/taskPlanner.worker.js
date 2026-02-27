import Task from "../../models/task.model.js";
import { generateStepsForTask } from "../ai/stepGeneration.service.js";
import { MAX_TASK_RETRIES, WORKER_INTERVAL} from "../config/job.config.js";

async function runTaskPlannerWorker(){
    console.log("Task Planner worker running....");

    const tasks = await Task.find({
        status:"pending",
        retryCount:{$lt :MAX_TASK_RETRIES}
    });

    console.log(`Found : ${tasks.length} tasks to process`);

    for(const task of tasks){
        try{
             console.log("Processing Task with id:",task._id);

            task.status = "generating";
            task.lastAttemptAt = new Date();

            await task.save();

            await generateStepsForTask(task);

            task.status = "ready";
            await task.save();
        }
        catch(error){
            console.log("Task Failed:",task._id);

            task.retryCount +=1;
            task.errorMessage = error.message;

            if(task.retryCount >=MAX_TASK_RETRIES){
                task.status = "failed";
            }else{
                task.status = "pending";
            }

                await task.save();
        }
       


    }
}

export function startTaskPlannerWorker(){
    setInterval(runTaskPlannerWorker,WORKER_INTERVAL);
}

