import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import axios from "axios";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import TrimVideo from "./TrimVideo";
import DataTable from "react-data-table-component";
const Video = () => {
  const [played, setPlayed] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [video, setVideo] = useState("");
  const [playing, setPlaying] = useState(false);
  const [load, setLoad] = useState(false);
  const [loadd, setLoadd] = useState(false);
  const [shot, setShot] = useState({ time: "", path: "" });
  const [time, setTime] = useState("");
  const [arr, setArr] = useState([]);
  const [out, setOut] = useState([]);
  const [result, setResult] = useState([]);
  const [t, setT] = useState("");
  const [player, setPlayer] = useState("");
  const [s, setS] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);
  const [laca, setLaca] = useState([]);
  const [d, setD] = useState(Date.now());
  console.log(d);

  const [videoPath, setVideoPath] = useState("");
  const [timeVideo, setTimeVideo] = useState("");
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef?.current?.currentTime) {
      setPlayed(videoRef?.current?.currentTime);
    }
    console.log(d);
  }, [d, played, videoRef, videoRef?.current, videoRef?.current?.currentTime]);
  useEffect(() => {
    let d = Math.floor(played);
    setHours(d / 3600);
    setMinutes((d % 3600) / 60);
    setSeconds((d % 3600) % 60);
    setTime(
      `${Math.floor(hours)}:${Math.floor(minutes)}:${Math.floor(seconds)}`
    );
  }, [played, seconds, minutes, hours]);
  const handleChange = async (e) => {
    setLoad(true);
    const file = e.target.files[0];
    //const file = event.target.files[0];
    if (file.name.includes(".wmv")) {
      //  let targetVideoFormat = "mp4";
      const laca = file.name.replace("wmv", "mp4");
      console.log({ file, laca });
      console.log(file.name);
      //setVideo(URL.createObjectURL(convertedVideoDataObj));
      //console.log(video);
      //setVideo(URL.createObjectURL(new Blob([file])));
      setLoad(false);

      // console.log(convertedVideoDataObj);
    } else {
      setVideo(URL.createObjectURL(file));
      console.log(video);
      //setVideo(URL.createObjectURL(new Blob([file])));
      setLoad(false);

      console.log(file);
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = (time, video) => {
    setShow1(true);
    setVideoPath(video);
    setTimeVideo(time);
  };
  const handleSubmit = () => {
    setShot({
      time: time,
      path: video,
    });
    console.log(shot);
    if (shot.path !== "") {
      setArr((arr) => [...arr, shot]);
    }
    console.log(arr);
  };

  useEffect(() => {
    data.forEach((e, i) => {
      arr.forEach((a, index) => {
        if (i == index) {
          setOut((out) => [...out, { ...e, time: a.time, path: a.path }]);
          //setLaca({...e,time: a.time, path: a.path})
        }
      });
    });

    console.log(out);
  }, [arr]);
  useEffect(() => {
    setOut(out);
  }, [out]);
  const handlSave = async () => {
    try {
      let name_db = localStorage.getItem("name_db")
        ? localStorage.getItem("name_db")
        : null;
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = {
        name_db: name_db,
        name: "score",
        score: out.filter(
          (x, i) => out.findLastIndex((y) => y.time == x.time) == i
        ),
      };

      const res = await axios.post("/api/score", data, config);
      handleClose();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchMatch = async () => {
      setLoadd(true);
      let name_db = localStorage.getItem("name_db")
        ? localStorage.getItem("name_db")
        : null;
      const res = await axios.get(`/api/match/${name_db}`);
      console.log(res);

      setData(res.data);
      setLoadd(false);
    };
    fetchMatch();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let name_db = localStorage.getItem("name_db")
          ? localStorage.getItem("name_db")
          : null;
        console.log(name_db);
        setLoad(true);
        const res = await axios.get(`/api/score/${name_db}`);
        setLaca(
          [].concat.apply(
            [],
            res?.data?.map((x) => x.score)
          )
        );
        console.log(res);
        if (res) {
          if (t !== "" && s == "" && player == "" && type == "") {
            // console.log(result);
            setResult(laca?.filter((d) => d.ball == t));

            //console.log(result);

            setLoad(false);
          } else if (t == "" && s !== "" && player == "" && type == "") {
            setResult(
              [].concat
                .apply(
                  [],
                  res.data?.map((x) => x.score)
                )
                .filter((x) => x.skill == s)
            );
            setLoad(false);
          } else if (t == "" && s == "" && player !== "" && type == "") {
            setResult(
              [].concat
                .apply(
                  [],
                  res.data?.map((x) => x.score)
                )
                .filter((x) => x.num == player)
            );
            setLoad(false);
          } else if (t == "" && s == "" && player == "" && type !== "") {
            setResult(
              [].concat
                .apply(
                  [],
                  res.data?.map((x) => x.score)
                )
                .filter((x) => x.res == type)
            );
            setLoad(false);
          } else if (t !== "" && s == "" && player !== "" && type == "") {
            setResult(laca?.filter((x) => x.ball == t && x.num == player));
            setLoad(false);
          } else if (t !== "" && s !== "" && player == "" && type == "") {
            setResult(laca?.filter((x) => x.ball == t && x.skill == s));
            setLoad(false);
          } else if (t !== "" && s == "" && player == "" && type !== "") {
            setResult(laca?.filter((x) => x.ball == t && x.res == type));
            setLoad(false);
          } else if (t == "" && s !== "" && player !== "" && type == "") {
            setResult(laca?.filter((x) => x.skill == s && x.num == player));
            setLoad(false);
          } else if (t == "" && s !== "" && player == "" && type !== "") {
            setResult(laca?.filter((x) => x.skill == s && x.res == type));
            setLoad(false);
          } else if (t == "" && s == "" && player !== "" && type !== "") {
            setResult(laca?.filter((x) => x.num == player && x.res == type));
            setLoad(false);
          } else if (t !== "" && s !== "" && player !== "" && type == "") {
            setResult(
              laca?.filter(
                (x) => x.ball == t && x.skill == s && x.num == player
              )
            );
            setLoad(false);
          } else if (t !== "" && s !== "" && player == "" && type !== "") {
            setResult(
              laca?.filter((x) => x.ball == t && x.skill == s && x.res == type)
            );
            setLoad(false);
          } else if (t !== "" && s == "" && player !== "" && type !== "") {
            setResult(
              laca?.filter(
                (x) => x.ball == t && x.num == player && x.res == type
              )
            );
            setLoad(false);
          } else if (t == "" && s !== "" && player !== "" && type !== "") {
            setResult(
              laca?.filter(
                (x) => x.num == player && x.skill == s && x.res == type
              )
            );
            setLoad(false);
          } else if (t !== "" && s !== "" && player !== "" && type !== "") {
            setResult(
              laca?.filter(
                (x) =>
                  x.ball == t &&
                  x.skill == s &&
                  x.res == type &&
                  x.num == player
              )
            );
            setLoad(false);
          } else {
            setResult(
              [].concat.apply(
                [],
                res.data?.map((x) => x.score)
              )
            );
            console.log(result);

            setLoad(false);
          }
        }
        //console.log(res);
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchData();
  }, [out, t, player, s, type, shot]);
  useEffect(() => {
    console.log(result);
  }, [result]);
  const teams = ["H", "G"];
  const skills = ["S", "R", "P", "A", "B", "D"];
  const types = ["E", "T", "O", "V"];
  const columns = [
    { selector: (row) => row.ball, name: "Name", width: "90px" },
    { selector: (row) => row.num, name: "Player", width: "90px" },
    { selector: (row) => row.skill, name: "Skills", width: "90px" },
    { selector: (row) => row.result, name: "Type_Skill", width: "90px" },
    { selector: (row) => row.from, name: "From", width: "90px" },
    { selector: (row) => row.to, name: "To", width: "90px" },
    { selector: (row) => row.point, name: "Point", width: "90px" },
    { selector: (row) => row.time, name: "Time_now", width: "90px" },
    { selector: (row) => row.path, name: "Path", width: "150px" },
    {
      name: "show",
      cell: (row) => (
        <button onClick={() => handleShow1(row.time, row.path)}>show</button>
      ),
    },
  ];
  const columnsDefs = [
    { key: "ball", name: "Name" },
    { key: "num", name: "Player" },
    { key: "skill", name: "Skills" },
    { key: "result", name: "Type_Skill" },
    { key: "from", name: "From" },
    { key: "to", name: "To" },
    { key: "point", name: "Point" },
    { key: "time", name: "Time_now" },
    { key: "path", name: "Path" },
  ];
  const handleMerge = async () => {
    let video = result[0].path;
    try {
      const res = await axios.post("/api/video", {
        video1: video,
        video2: video,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          Upload video
        </Button>
        {load ? (
          <p>loading...</p>
        ) : result ? (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Form.Group>
                <p>Team</p>
                <Form.Select
                  aria-label="Default select example"
                  value={t}
                  onChange={(e) => setT(e.target.value)}
                >
                  <option>select</option>
                  {teams.map((t) => (
                    <option value={t}>{t}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <p>Player</p>

                <Form.Control
                  type="text"
                  name="player"
                  placeholder="Enter Number Player"
                  value={player}
                  onChange={(e) => setPlayer(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <p>Skills</p>
                <Form.Select
                  aria-label="Default select example"
                  value={s}
                  onChange={(e) => setS(e.target.value)}
                >
                  <option>select</option>
                  {skills.map((t) => (
                    <option value={t}>{t}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <p>Type Skills</p>
                <Form.Select
                  aria-label="Default select example"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option>select</option>
                  {types.map((t) => (
                    <option value={t}>{t}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <DataTable
              columns={columns}
              data={result}
              pagination
              fixedHeaderScrollHeight="400px"
              highlightOnHover
              subHeader
            />
            {/*     <Table striped bordered hover style={{ marginTop: "10px" }}>
              <thead>
                <tr>
                  <th>ball</th>
                  <th>num</th>
                  <th>skill</th>

                  <th>result</th>

                  <th>from</th>
                  <th>to</th>
                  <th>point</th>
                  <th>time</th>
                  <th>path</th>
                </tr>
              </thead>
              <tbody style={{ border: "1px solid #333", textAlign: "center" }}>
                {result?.map((d) => (
                  <tr>
                    <td>{d.ball}</td>
                    <td>{d.num}</td>
                    <td>{d.skill}</td>

                    <td>{d.result}</td>

                    <td>{d.from}</td>
                    <td>{d.to}</td>
                    <td>{d.point}</td>
                    <td>{d.time}</td>
                    <td>{d.path}</td>
                    <td>
                      {" "}
                      <button onClick={() => handleShow1(d.time, d.path)}>
                        show
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
                </Table>*/}
          </>
        ) : null}
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Video</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {loadd ? (
                <p>loading...</p>
              ) : data ? (
                <>
                  <DataGrid
                    columns={columnsDefs}
                    rows={data}
                    style={{
                      width: "100%",
                      maxHeight: "150px",
                      overflowY: "scroll",
                      fontSize: "10px",
                    }}
                  />
                </>
              ) : null}
            </Modal.Body>
            <Modal.Body>
              <input
                type="file"
                accept=".mp4, .wmv,.webm,.ogg"
                onChange={handleChange}
                placeholder="Choose Video"
                style={{
                  opacity: "1",
                  zIndex: "-100",
                }}
              />
            </Modal.Body>

            <Modal.Body>
              {load && <p>loading...</p>}
              {video ? (
                <div>
                  {/* <ReactPlayer
                    playing={playing}
                    style={{ maxWidth: "100%", maxHeight: "200px" }}
                    url={[
                      { src: { video }, type: "video/webm" },
                      { src: { video }, type: "video/ogg" },
                      { src: { video }, type: "video/mp4" },
                    ]}
                    controls={true}
                    //config={{ file: { forceHLS: true } }}
                    onProgress={(progress) => {
                      setPlayed(progress.playedSeconds);
                    }}
                  />*/}
                  <video
                    ref={videoRef}
                    onProgress={(progress) => {
                      setPlayed(progress.timeStamp);
                      // console.log(progress);
                      //console.log(progress.playedSeconds);
                    }}
                    autoPlay
                    style={{ width: "100%", maxHeight: "200px" }}
                    controls
                  >
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/webm" />
                    <source src={video} type="video/ogg" />
                    <source src={video} type="video/x-ms-wmv" />
                  </video>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      justifyContent: "space-between",
                    }}
                  >
                    <button size="small">
                      {playing ? (
                        <span onClick={() => setPlaying(false)}>paused</span>
                      ) : (
                        <span onClick={() => setPlaying(true)}>start</span>
                      )}
                    </button>
                    <button onClick={handleSubmit}>shot</button>
                    <p
                      style={{
                        textAlign: "center",
                        backgroundColor: "#333",
                        color: "#fff",
                      }}
                    >
                      {Math.floor(hours)}:{Math.floor(minutes)}:
                      {Math.floor(seconds)}
                    </p>
                  </div>
                </div>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" disabled={load} onClick={handlSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <TrimVideo
          videoPath={videoPath}
          timeVideo={timeVideo}
          show={show1}
          handleClose={handleClose1}
          handleShow={handleShow1}
          result={result}
        />
      </>
    </Container>
  );
};

export default Video;
