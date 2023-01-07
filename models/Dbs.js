const mongoose = require("mongoose");
const dbSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
  },
});
module.exports = mongoose.model("db", dbSchema);
