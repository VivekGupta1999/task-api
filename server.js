import dotenv from 'dotenv';
//configure the environment variables
dotenv.config();

import express from 'express';
import connectToMongoDB from './config/db.js';
import taskRouter from './routes/task.route.js';





//create an instance of the express;
const app = express();

//add JSON Middleware so 
app.use(express.json());

app.use("/api/tasks",taskRouter)

//setup basic get method for the server 
app.get('/api/',(req,res)=>{
    res.send("Hello World!")
})


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



