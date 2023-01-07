const { Player } = require("../models/Players");
const mongoose = require("mongoose");
const { playersSchema } = require("../models/Players");
const { matchSchema } = require("../models/Match");
const { scoreSchema } = require("../models/Score");
let name;
let PlayerModel;
let MatchModel;
let ScoreModel;
const anotherConn = async () => {
  const conn = await mongoose.createConnection(
    `mongodb+srv://ahmed:VernA2525@cluster0.2qrrr0b.mongodb.net/${name}?retryWrites=true&w=majority`
  );

  PlayerModel = conn.model("player", playersSchema);
  MatchModel = conn.model("match", matchSchema);
  ScoreModel = conn.model("score", scoreSchema);
};
const addPlayers = async (req, res) => {
  const { team1, team2, date, name_db } = req.body;
  if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
    //localStorage.removeItem("name_db");
    localStorage.setItem(
      "name_db",
      `${team1.replace(/\s/g, "").substring(0, 6)}_${team2
        .replace(/\s/g, "")
        .substring(0, 6)}_${date.replace(/\s/g, "").substring(0, 10)}`
    );
    name = name_db;
    console.log(name);
    console.log(name_db);
  }
  try {
    //console.log(req.body);
    await anotherConn();
    const player = await PlayerModel.create(req.body);
    res.json(player);
  } catch (err) {
    console.log(err.message);
  }
};
const getPlayers = async (req, res) => {
  if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
    localStorage.removeItem("name_db");

    name = localStorage.getItem("name_db");
    // console.log(localStorage.getItem("name_db"));
    //console.log(name);
  }

  const { name_db } = req.params;
  name = name_db;
  console.log(name);
  // console.log(req.body);
  try {
    //console.log(req.body);
    //console.log(name);
    //console.log(localStorage.getItem("name_db"));

    await anotherConn();

    const players = await PlayerModel.find();
    res.json(players);
  } catch (err) {
    //console.log(err.message);
  }
};
const addMatch = async (req, res) => {
  const { ball, num, result, skill, from, to, point, deg, name_db } = req.body;
  if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
    localStorage.removeItem("name_db");

    // name = localStorage.getItem("name_db");
    // console.log(localStorage.getItem("name_db"));
    //console.log(name);
  }
  name = name_db;
  //console.log(name_db);
  console.log(req.body);
  try {
    // console.log(req.body);
    anotherConn();
    const match = await MatchModel.create(req.body);
    res.json(match);
  } catch (err) {
    //console.log(err);
  }
};
const getMatch = async (req, res) => {
  const { name_db } = req.params;
  name = name_db;
  try {
    anotherConn();
    const matches = await MatchModel.find();
    res.json(matches);
  } catch (err) {
    //console.log(err);
  }
};
const addScore = async (req, res) => {
  if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch");
    localStorage.removeItem("name_db");

    //name = localStorage.getItem("name_db");
    // console.log(localStorage.getItem("name_db"));
    // console.log(name);
  }
  const { name_db } = req.body;
  console.log(name_db);
  console.log(req.body);
  try {
    // console.log(req.body);
    anotherConn();
    const score = await ScoreModel.create(req.body);
    res.json(score);
  } catch (err) {
    // console.log(err);
  }
};
const getScore = async (req, res) => {
  const { name_db } = req.params;
  name = name_db;
  try {
    //console.log(req.body);

    anotherConn();
    const score = await ScoreModel.find();
    res.json(score);
  } catch (err) {
    // console.log(err);
  }
};
module.exports = {
  addPlayers,
  getPlayers,
  anotherConn,
  addMatch,
  addScore,
  getScore,
  getMatch,
};
