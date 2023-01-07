const express = require("express");
const controller = require("../controllers/team");
const router = express.Router();
router.get("/", controller.getTeams);
router.post("/", controller.addTeam);
module.exports = router;
