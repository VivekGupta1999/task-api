import Task from "../models/task.model.js";
import { generatePlan } from "../src/ai/aiPlanning.Service.js";
import { generateStepsForTask } from "../src/ai/stepGeneration.service.js";
import { getTaskWithSteps } from "../src/taskService.js";

async function getAllTasks(req,res,next){
    try{
        const tasks = await Task.find({});
        res.status(200).json({
            success:true,
            data:tasks
        });
    }
    catch(error){
        next(new CustomError(500,"Unable to get tasks."));

    }
}

async function getTaskById(req,res,next){
    try{
        const data = await getTaskWithSteps(req.params.id);
        
            res.status(200).json({
                success:true,
                data:data

            });
        
    }catch(error){
        next(error);
    }
}

async function createTask(req,res,next){
    try{
        const { goal, pacing, targetDate } = req.body;

        const task = await Task.create({
            goal,
            pacing,
            targetDate,
            status: "pending"
        });

        res.status(201).json({
            success:true,
            data:task
        });



    }catch(error){
       next(new CustomError(500,"Unable to create the task."));
    }
}

async function updateTask(req,res,next){
    try{
      
        const task = await Task.findByIdAndUpdate(req.params.id,{
            goal:req.body.goal,
            pacing:req.body.pacing,
            targetDate:req.body.targetDate,
            status:req.body.status
        },{new:true});
       

        if(!task){
            throw new CustomError(404,"Could not find the task to update");
        }else{
            res.status(200).json({
                success:true,
                data:task
            });
        }
        

    }catch(error){
        next(error);
    }
}

async function deleteTask(req,res,next){
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task){
            throw new CustomError(404,"Task not found");

        }else{
            res.status(200).json({
                success:true,
                data:req.params.id
        });
        }

    }catch(error){
        next(error);
    }
}

async function createPlannedTask(req,res,next){
    try{
        const {goal,targetDate,pacing} = req.body;


         if (!goal || !targetDate || !pacing) {
            return res.status(400).json({
                success: false,
                message: "goal, targetDate and pacing are required"
            });
            }
            
        //create mini task first
        const task = await Task.create({
            goal,
            targetDate,
            pacing,
            status:"planning"
        });

        //call AI
        const aiPlan = await generatePlan({
            goal,
            targetDate,
            pacing
        });

        //Temp: console output only
        console.log("AI Plan");
        console.log(JSON.stringify(aiPlan,null,2));


        res.status(201).json({
            success:true,
            taskId:task._id,
            planPreview:aiPlan
        });
    }catch(error){
        next(error);
    }
}

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask, createPlannedTask };