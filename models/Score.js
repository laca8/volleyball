const mongoose = require("mongoose");
const scoreSchema = mongoose.Schema(
  {
    score: [
      {
        ball: {
          type: String,
        },
        num: {
          type: String,
        },
        skill: {
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
        time: {
          type: String,
        },
        path: {
          type: String,
        },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const Score = mongoose.model("score", scoreSchema);
module.exports = {
  Score,
  scoreSchema,
};
