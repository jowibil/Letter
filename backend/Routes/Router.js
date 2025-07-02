import express from 'express';

const router=express.Router();

router.get("/Login",(req,res)=>{

    res.status(200).send("This is the Login");
});

export default router;