
import mongoose from "mongoose";

async function connectToMongoDB(){
    const uri = process.env.MONGO_DB_URI;

   

    try {
        await  mongoose.connect(uri);

        console.log("Connected to Mongo DB Successfully.")
    } catch (error) {

        console.log("Unable to Connect to MONGO DB. Error:",error);
        process.exit(1);
    }
}

export default connectToMongoDB;