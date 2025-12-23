import dotenv from 'dotenv';
//configure the environment variables
dotenv.config();

import express from 'express';
import connectToMongoDB from './config/db.js';
import taskRouter from './routes/task.route.js';
import errorHandler  from './middleware/errorHandler.js';




//create an instance of the express;
const app = express();

//add JSON Middleware so 
app.use(express.json());


//setup basic get method for the server 
app.get('/api/',(req,res)=>{
    res.send("Hello World!")
})


//the tasks router for our app
app.use("/api/tasks",taskRouter)

//the error handler middleware it should always come after the routes
app.use(errorHandler);

//function to start the server only if connection to MongoDB is successfull.
async function startServer(){
    try {
        await connectToMongoDB();
        console.log("Connected to DB Successfully.")
        app.listen(process.env.PORT,()=>{
            console.log("Server is running on local host port:",process.env.PORT);
        })
    } catch (error) {
        console.log("Failed to start Server:",error);
        process.exit(1);
    }
}

startServer();



