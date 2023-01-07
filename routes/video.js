const express = require("express");
const ffmpeg = require("fluent-ffmpeg");
const router = express.Router();
let videoStitch = require("video-stitch");
router.post("/cut", async (req, res) => {
  const { path, time } = req.body;
  try {
    const result = await ffmpeg.ffprobe(path, (err, metaData) => {
      const startTime = parseInt(time);
      const clibDuration = 5;
      ffmpeg()
        .input(path)
        .inputOptions([`-ss ${startTime}`])
        .outputOptions([`-t ${clibDuration}`])
        .noAudio()
        .output("./result.mp4")
        .on("end", () => console.log("done"))
        .on("error", (err) => console.log(err))
        .run();
    });
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});
router.post("/", (req, res) => {
  const { video1, video2 } = req.body;
  try {
    let videoMerge = videoStitch.merge;

    videoMerge()
      .original({
        fileName: "FILENAME.mp4",
        duration: 100,
      })
      .clips([
        {
          startTime: 22,
          fileName: video1,
          duration: 25,
        },
        {
          startTime: 27,
          fileName: video2,
          duration: 30,
        },
      ])
      .merge()
      .then((outputFile) => {
        console.log("path to output file", outputFile);
        // res.json(outputFile);
      });
  } catch (err) {
    console.log(err.message);
    res.json({ msg: err.message });
  }
});
module.exports = router;
