import express from 'express';
import { getSomthng } from '../controllers/Controller.js'

const router=express.Router();

router.get("/Login",getSomthng
);

export default router;