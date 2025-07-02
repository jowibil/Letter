import express from "express";
import router from "./Routes/Router.js";
const app=express();    

app.use("/SyntaxRush", router);


app.listen(5001, ()=>{
    console.log("Server is Listening to Port 5001!");
});