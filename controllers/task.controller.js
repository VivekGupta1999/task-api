import Task from "../models/task.model.js";


async function getAllTasks(req,res){
    try{
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    }
    catch(error){
        console.log("Unable to Get Tasks. Error:",error);
        res.status(500).json({message:"Unable to Get Tasks."});
    }
}

async function getTaskById(req,res){
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            res.status(404).json({message:"Task Not found"})
            return
        }else{
            res.status(200).json({task});
        }
    }catch(error){
        res.status(500).json({message:"Unable to Get Task."})
    }
}

async function createTask(req,res){
    try{
        const task = await Task.create({
            title:req.body.title,
            description:req.body.description,
            completed: false,
            dueDate:req.body.dueDate

        })
        res.status(201).json({task});
    }catch(error){
        res.status(500).json({message:"Unable to create a task."});
    }
}

async function updateTask(req,res){
    try{
      
        const task = await Task.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            completed: req.body.completed
        },{new:true});
       

        if(!task){
            res.status(404).json({message:"Task Not found"});
            return
        }else{
            res.status(200).json({task});
        }
        

    }catch(error){
        res.status(500).json({message:"Unable to update the task"});
    }
}



async function deleteTask(req,res){
    try{
        const task = await Task.findByIdAndDelete(req.params.id);

        if(!task){
            res.status(404).json({message:"Not found."});
            return;

        }else{
            res.status(200).json({message:"Deleted Task"});
        }

    }catch(error){
        res.status(500).json({message:"Unable to delete Task"});
    }
}

export { getAllTasks, getTaskById, createTask, updateTask, deleteTask };