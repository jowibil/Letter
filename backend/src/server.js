import express from "express";
import router from "./Routes/Router.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"

dotenv.config();
const Port=process.env.Port ||5001;
const app=express();    

app.use("/SyntaxRush", router);
connectDB();



app.listen(Port, ()=>{
    console.log("Server is Listening to Port! ", Port);
});

//MongoDB Pass
//hK7Hs6baHFBMbiAu

