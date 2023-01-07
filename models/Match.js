const mongoose = require("mongoose");
const matchSchema = mongoose.Schema({
  ball: {
    type: String,
  },
  num: {
    type: String,
  },
  skill: {
    type: String,
  },
  deg: {
    type: String,
  },
  result: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  point: {
    type: String,
  },
});

const Match = mongoose.model("match", matchSchema);
module.exports = {
  Match,
  matchSchema,
};
