const express = require("express");
const controller = require("../controllers/players");
const router = express.Router();
router.post("/", controller.addPlayers);
router.get("/:name_db", controller.getPlayers);
module.exports = router;
