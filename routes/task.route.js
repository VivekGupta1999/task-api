import express from 'express';
import {createTask,getTaskById,getAllTasks,updateTask,deleteTask} from "../controllers/task.controller.js";
import {validateObjectId} from "../middleware/validateObjectId.js"
const router = express.Router();


//create task
router.post("/",createTask);

//get all tasks.
router.get("/",getAllTasks);


//get task by id
router.get("/:id",validateObjectId,getTaskById);

//update task
router.patch("/:id",validateObjectId,updateTask);

//delete task
router.delete("/:id",validateObjectId,deleteTask);


export default router;