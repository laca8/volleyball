import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FFMPEG from "react-ffmpeg";
import ReactPlayer from "react-player";
import { Image, Video, Transformation } from "cloudinary-react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { fill } from "@cloudinary/url-gen/actions/resize";
const TrimVideo = ({
  show,
  handleClose,
  handleShow,
  videoPath,
  timeVideo,
  result,
}) => {
  const [video, setVideo] = useState("");
  const [load, setLoad] = useState(false);
  const [du, setDu] = useState("");
  const [ready, setReady] = useState(false);

  const [d, setD] = useState(Date.now());

  console.log(timeVideo);
  const playerRef = useRef(null);
  console.log(playerRef);
  var a = timeVideo?.split(":");
  var seconds = Number(+a[0]) * 60 * 60 + Number(+a[1]) * 60 + Number(+a[2]);
  console.log(seconds);
  useEffect(() => {
    // console.log(playerRef?.current?.getCurrentTime());
    //console.log(playerRef?.current?.getCurrentTime() + seconds);
    if (playerRef !== null && playerRef.current) {
      playerRef.current.currentTime = seconds - 2;
      //setDu(playerRef.current.duration);
    }

    // console.log(playerRef?.current?.getSecondsLoaded());
    //console.log(playerRef?.current?.getDuration());
    console.log(playerRef?.current?.currentTime);
  }, [
    timeVideo,
    seconds,
    video,
    du,
    playerRef?.current?.currentTime,
    playerRef?.current,
    playerRef,
  ]);
  const handleChange = (e) => {
    setLoad(true);
    const file = e.target.files[0];
    //const file = event.target.files[0];

    setVideo(URL.createObjectURL(file));
    console.log(video);
    //setVideo(URL.createObjectURL(new Blob([file])));
    setLoad(false);

    console.log(file);
  };
  useEffect(() => {
    var myvid = document.getElementById("myvideo");

    if (playerRef?.current?.play()) {
      setTimeout(() => {
        playerRef?.current?.pause();
      }, 5000);
    }

    setDu(playerRef?.current?.currentTime);
    console.log(du);
    if (du == seconds + 2) {
      playerRef.current.pause();
    }
  }, [seconds, du, playerRef]);

  /*useEffect(() => {
    var myvid = document.getElementById("myvideo");
    var myvids = [
      "http://www.w3schools.com/html/mov_bbb.mp4",
      "http://www.w3schools.com/html/movie.mp4",
    ];
    var activeVideo = 0;

    myvid.addEventListener("ended", function (e) {
      // update the new active video index
      activeVideo = ++activeVideo % myvids.length;

      // update the video source and play
      myvid.src = myvids[activeVideo];
      myvid.play();
    });
  }, []);*/
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="file"
            onChange={handleChange}
            placeholder="Choose Video"
            style={{
              opacity: "1",
              zIndex: "-100",
              marginBottom: "15px",
            }}
          />
          {load && <p>loading...</p>}
          {video ? (
            <>
              <video
                ref={playerRef}
                onProgress={(progress) => {
                  setDu(progress.timeStamp);
                }}
                autoPlay
                style={{ width: "100%", maxHeight: "200px" }}
                controls
                id="myvideo"
              >
                <source src={video} type="video/mp4" />
                <source src={video} type="video/webm" />
                <source src={video} type="video/ogg" />
                <source src={video} type="video/x-ms-wmv" />
              </video>

              {/*  <DnmVideoCut
                ref={playerRef}
                catalogue={{
                  unmute: "Custom unmute label",
                }}
                src={video}
                maxDuration={seconds + 2}
                minDuration={seconds - 2}
                currentTime={seconds - 2}
                timeRange={{ start: 10, end: 100 }}
                start={seconds - 2}
                onNotSupportedVideoLoad={(err) =>
                  console.error("Video source not supported", err)
                }
              />*/}
            </>
          ) : null}
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default TrimVideo;
