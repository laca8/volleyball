const express = require("express");
const controller = require("../controllers/players");
const router = express.Router();
router.post("/", controller.addScore);
router.get("/:name_db", controller.getScore);
module.exports = router;
