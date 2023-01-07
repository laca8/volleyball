const Dbs = require("../models/Dbs");
const addDbs = async (req, res) => {
  try {
    const dbs = await Dbs.create({
      name: req.body.name,
      user: req.user._id,
    });
    res.json(dbs);
  } catch (err) {
    console.log(err);
  }
};
const getDbs = async (req, res) => {
  try {
    const dbs = await Dbs.aggregate([
      {
        $match: { user: req.user._id },
      },
    ]);
    res.json(dbs);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getDbs,
  addDbs,
};
