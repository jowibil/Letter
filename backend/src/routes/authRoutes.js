import express from 'express';
import { sendCode, signup, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/send-code', sendCode);
router.post('/signup', signup);
router.post('/login', login);

export default router;
