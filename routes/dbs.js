const express = require("express");
const dbs = require("../controllers/dbs");
const { auth } = require("../middlewares/auth");
const router = express.Router();
router.post("/", auth, dbs.addDbs);
router.get("/", auth, dbs.getDbs);
module.exports = router;
