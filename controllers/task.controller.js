import Task from "../models/task.model.js";
import CustomError from "../util/CustomError.js";

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
        const task = await Task.findById(req.params.id);
        if(!task){
            throw new CustomError(404,"Task not found");
           
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

async function createTask(req,res,next){
    try{
        const task = await Task.create({
            title:req.body.title,
            description:req.body.description,
            completed: false,
            dueDate:req.body.dueDate

        })
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
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            completed: req.body.completed
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

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };