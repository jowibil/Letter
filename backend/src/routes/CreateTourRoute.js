import express from "express";
const router = express.Router();
import tournamentController from "../controllers/createTourController.js";
const auth = require('../middleware/authMiddleware'); // your JWT auth middleware

router.post('/', auth, tournamentController.createTournament);
router.get('/', tournamentController.getAllTournaments);
router.post('/:id/join', auth, tournamentController.joinTournament);

module.exports = router;