import express from 'express';
import { getSomthng } from '../controllers/Controller.js'
import { register } from '../controllers/Controller.js';

const router=express.Router();

router.get("/Login",getSomthng
);
router.get("/Register",register);

router.get("/")
export default router;