const express = require("express");
const controller = require("../controllers/match");
const controllerPlayers = require("../controllers/players");
const router = express.Router();
router.post("/", controllerPlayers.addMatch);
router.get("/:name_db", controllerPlayers.getMatch);
module.exports = router;
