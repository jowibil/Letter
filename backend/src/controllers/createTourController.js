import Tournament from "../models/CreateTourModel.js";

exports.createTournament=async (req, res)=>{
    try{
        const {name,description, startTime, endTime }= req.body;

        const newTournament = new Tournament({
            name,
            description,
            createdBy:req.body.id,
            startTime,
            endTime

        });

        const savedTournament= await newTournament.save();
        res.status(201).json(savedTournament);

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
};
exports.getAllTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find().populate('createdBy', 'username');
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Join a tournament
exports.joinTournament = async (req, res) => {
  try {
    const tournament = await Tournament.findById(req.params.id);
    if (!tournament) return res.status(404).json({ message: 'Tournament not found' });

    if (!tournament.participants.includes(req.user.id)) {
      tournament.participants.push(req.user.id);
      await tournament.save();
    }

    res.json({ message: 'Joined tournament' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};