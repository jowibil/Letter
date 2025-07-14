import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from "./src/routes/AuthRoutes.js"
import tournamentRoutes from "./src/routes/CreateTourRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/CreateTournament', tournamentRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => 
        console.log(`Listening to Port ${process.env.PORT}`)
    );
})
.catch(err => console.error(err));