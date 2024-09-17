import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"
dotenv.config({
    path: "./env"
})

connectDB()
.then(() =>{
    
    app.listen(process.env.PORT ,() => {
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