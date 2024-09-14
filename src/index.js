import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express";
const app = express()
dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{
    
    app.listen(process.env.PORT || 4000 ,() => {
        console.log(`server is running at ${process.env.PORT}`)
    })
})
.catch((e) => {
    console.log("MONGO DB Connection failed",e)
})

process.on('uncaughtException', (err) => {
    console.error("There was an uncaught exception: ", err);
});


process.on('unhandledRejection', (reason, promise) => {
    console.error("Unhandled Rejection at: ", promise, " reason: ", reason);
});