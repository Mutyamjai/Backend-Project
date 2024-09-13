import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`MongoDB connected to Host : ${connectionInstance.connection.host}`)
    }
    catch(e){
        console.log("Error in MongoDB Connection",e);
        process.exit(1)
    }
}

export default connectDB;