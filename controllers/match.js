const { Match } = require("../models/Match");
const { anotherConn } = require("./players");
const addMatch = async (req, res) => {
  const { ball, num, result, skill, from, to, point, deg } = req.body;
  try {
    console.log(req.body);
    anotherConn();
    const match = await new Match({
      ball,
      num,
      result,
      skill,
      from,
      to,
      point,
      deg,
    });
    await match.save();
    res.json(match);
  } catch (err) {
    console.log(err);
  }
};
const getMatch = async (req, res) => {
  try {
    anotherConn();
    const matches = await Match.find();
    res.json(matches);
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  addMatch,
  getMatch,
};
