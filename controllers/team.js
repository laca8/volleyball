const Team = require("../models/Team");
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.json(teams);
  } catch (err) {
    console.log(err);
  }
};
const addTeam = async (req, res) => {
  try {
    const { name, club, position, number } = req.body;
    const teamNum = await Team.findOne({ number: number });
    const teamClub = await Team.findOne({ club: club });
    if (teamNum && teamClub) {
      return res.status(500).json({ msg: "player is already exist" });
    } else {
      const newTeam = await Team.create(req.body);
      res.json(newTeam);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  getTeams,
  addTeam,
};
