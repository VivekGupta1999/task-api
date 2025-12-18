import express from 'express';
import {createTask,getTaskById,getAllTasks,updateTask,deleteTask} from "../controllers/task.controller.js";

const router = express.Router();


//create task
router.post("/",createTask);

//get all tasks.
router.get("/",getAllTasks);


//get task by id
router.get("/:id",getTaskById);

//update task
router.patch("/:id",updateTask);

//delete task
router.delete("/:id",deleteTask);


export default router;