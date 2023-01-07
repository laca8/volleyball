const mongoose = require("mongoose");
const playersSchema = mongoose.Schema({
  champ: {
    type: String,
  },
  date: {
    type: String,
  },
  team1: {
    type: String,
  },
  team2: {
    type: String,
  },
  players1: [
    {
      club: {
        type: String,
        required: true,
      },
      position: {
        type: String,
      },
      name: {
        type: String,
      },
      number: {
        type: String,
      },
    },
  ],
  players2: [
    {
      club: {
        type: String,
        required: true,
      },
      position: {
        type: String,
      },
      name: {
        type: String,
      },
      number: {
        type: String,
      },
    },
  ],
});
const Player = mongoose.model("player", playersSchema);
module.exports = {
  playersSchema,
  Player,
};
