const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config({ path: "./config/config.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahmed:VernA2525@cluster0.2qrrr0b.mongodb.net/vollyball?retryWrites=true&w=majority"
    );
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();
app.use("/api/teams", require("./routes/teamRoute"));
app.use("/api/players", require("./routes/player"));
app.use("/api/match", require("./routes/match"));
app.use("/api/score", require("./routes/score"));
app.use("/api/user", require("./routes/user"));
app.use("/api/dbs", require("./routes/dbs"));
app.use("/api/video", require("./routes/video"));
const NODE_ENV = "production";
if (NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running...");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server running...");
});
