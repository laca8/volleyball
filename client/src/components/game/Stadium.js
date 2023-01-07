import React, { useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Form } from "react-bootstrap";
import stad from "../../img/11.jpg";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import axios from "axios";
import H3 from "../players/team1/H3";
import G3 from "../players/team2/G3";
import G1 from "../players/team2/G1";
import H1 from "../players/team1/H1";
const Stadium = ({
  players,
  players1,
  players2,
  data,
  setData,
  newPlayers1,
  id1,
  setId1,
  id2,
  setId2,
  id3,
  setId3,
  id4,
  setId4,
  id5,
  setId5,
  id6,
  setId6,
  id11,
  setId11,
  id22,
  setId22,
  id33,
  setId33,
  id44,
  setId44,
  id55,
  setId55,
  id66,
  setId66,
  libro11,
  libro12,
  libro21,
  libro22,
  pointsH,
  setPointsH,
  pointsG,
  setPointsG,
  isLibro1,
  setIsLibro1,
  isLibro2,
  setIsLibro2,
  isLibro3,
  setIsLibro3,
  isLibro4,
  setIsLibro4,
  isLibro5,
  setIsLibro5,
  isLibro6,
  setIsLibro6,
  isLibro11,
  setIsLibro11,
  isLibro22,
  setIsLibro22,
  isLibro33,
  setIsLibro33,
  isLibro44,
  setIsLibro44,
  isLibro55,
  setIsLibro55,
  isLibro66,
  setIsLibro66,
}) => {
  const [ball, setBall] = useState("");
  const [num, setNum] = useState("");
  const [skill, setSkill] = useState("");
  const [deg, setDeg] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [point, setPoint] = useState("");
  const [res, setRes] = useState("");
  const [moves, setMoves] = useState([]);
  const [last, setLast] = useState({});
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  useEffect(() => {
    console.log(players1);
    players1.map((p) => {
      if (p.id == "1" && p.position == "Libero") {
        setIsLibro1(true);
        setId1({
          num: p.num,
          position: p.position,
        });
        // console.log(id1);
      } else if (p.id == "1" && p.position !== "Libero") {
        setIsLibro1(false);
        setId1({
          num: p.num,
          position: p.position,
        });
      }

      if (p.id == "2" && p.position == "Libero") {
        alert("يجب تغير الليبرو");
      } else if (p.id == "2" && p.position != "Libero") {
        setId2({
          num: p.num,
          position: p.position,
        });
      }
      if (p.id == "3" && p.position == "Libero") {
        alert("يجب تغير الليبرو");
      } else if (p.id == "3" && p.position != "Libero") {
        setId3({
          num: p.num,
          position: p.position,
        });
      }
      if (p.id == "4" && p.position == "Libero") {
        alert("يجب تغير الليبرو");
      } else if (p.id == "4" && p.position != "Libero") {
        setId4({
          num: p.num,
          position: p.position,
        });
      }

      if (p.id == "5" && p.position == "Libero") {
        setIsLibro5(true);
        setId5({
          num: p.num,
          position: p.position,
        });
      } else if (p.id == "5" && p.position !== "Libero") {
        setIsLibro5(false);
        setId5({
          num: p.num,
          position: p.position,
        });
      }
      if (p.id == "6" && p.position == "Libero") {
        setIsLibro6(true);
        setId6({
          num: p.num,
          position: p.position,
        });
      } else if (p.id == "6" && p.position !== "Libero") {
        setIsLibro6(false);
        setId6({
          num: p.num,
          position: p.position,
        });
      }
    });
  }, [players1]);
  useEffect(() => {
    console.log(players2);
    players2.map((p) => {
      if (p.id == "1" && p.position == "Libero") {
        setIsLibro11(true);
        setId11({
          num: p.num,
          position: p.position,
        });
      } else if (p.id == "1" && p.position !== "Libero") {
        setIsLibro11(false);
        setId11({
          num: p.num,
          position: p.position,
        });
      }
      if (p.id == "2" && p.position == "Libero") {
        alert("يجب تغير الليبرو");
      } else if (p.id == "2" && p.position != "Libero") {
        setId22({
          num: p.num,
          position: p.position,
        });
      }
      if (p.id == "3" && p.position == "Libero") {
        alert("يجب تغير الليبرو");
      } else if (p.id == "3" && p.position != "Libero") {
        setId33({
          num: p.num,
          position: p.position,
        });
      }

      if (p.id == "4" && p.position == "Libero") {
        alert("يجب تغير الليبرو");
      } else if (p.id == "4" && p.position != "Libero") {
        setId44({
          num: p.num,
          position: p.position,
        });
      }

      if (p.id == "5" && p.position == "Libero") {
        setIsLibro55(true);
        setId55({
          num: p.num,
          position: p.position,
        });
      } else if (p.id == "5" && p.position !== "Libero") {
        setIsLibro55(false);
        setId55({
          num: p.num,
          position: p.position,
        });
      }
      if (p.id == "6" && p.position == "Libero") {
        setIsLibro66(true);
        setId66({
          num: p.num,
          position: p.position,
        });
      } else if (p.id == "6" && p.position !== "Libero") {
        setIsLibro66(false);
        setId66({
          num: p.num,
          position: p.position,
        });
      }
    });
  }, [players2]);
  const handleSubmit = async () => {
    let name_db = localStorage.getItem("name_db")
      ? localStorage.getItem("name_db")
      : null;
    const game = { ball, num, skill, from, to, point, result: res, name_db };
    const move = {
      ball,
      skill,
      num,
      from,
      to,
    };
    setMoves((moves) => [...moves, move]);
    console.log(game);
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (ball == "H" && res == "T") {
      setPointsH((points) => (points += 1));
    } else if (ball == "G" && res == "E") {
      setPointsH((points) => (points += 1));
    }
    if (ball == "H" && res == "E") {
      setPointsG((points) => (points += 1));
    } else if (ball == "G" && res == "T") {
      setPointsG((points) => (points += 1));
    }

    const response = await axios.post("/api/match", game, config);
    console.log(response);
    setData((data) => [...data, game]);
    setBall("");

    setFrom("");
    setNum("");
    setTo("");
    setPoint("");
    setSkill("");
    setRes("");
    document.getElementById("ball").focus();
  };
  useEffect(() => {
    setLast(data && data[data?.length - 1]);
    if (last?.ball == "H" && last?.result == "T") {
      setBall("H");
      setNum(last?.num);
      setSkill("S");
      document.getElementById("res").focus();
    }
    if (last?.ball == "G" && last?.result == "T") {
      setBall("G");
      setNum(last?.num);
      setSkill("S");
      document.getElementById("res").focus();
    }
    if (last?.ball == "H" && last?.result == "E") {
      setBall("G");
      setNum(last?.num);
      setSkill("S");
      document.getElementById("res").focus();
    }
    if (last?.ball == "G" && last?.result == "E") {
      setBall("H");
      setNum(last?.num);
      setSkill("S");
      document.getElementById("res").focus();
    }
  }, [data, last, last?.ball, last?.res]);

  const handleKey = (e) => {
    e.code === "Enter" && handleSubmit();
  };
  useEffect(() => {
    if (ball == "H" || ball == "G") {
      document.getElementById("num").focus();
    }
    if (ball !== "" && ball !== "H" && ball !== "G") {
      alert("error");
      setBall("");
    }
    if (num) {
      document.getElementById("skill").focus();
    }
    if (
      skill == "S" ||
      skill == "R" ||
      skill == "P" ||
      skill == "A" ||
      skill == "B" ||
      skill == "D"
    ) {
      document.getElementById("res").focus();
    }
    if (
      skill != "" &&
      skill !== "S" &&
      skill !== "R" &&
      skill !== "P" &&
      skill !== "A" &&
      skill !== "B" &&
      skill !== "D"
    ) {
      alert("error");
      setSkill("");
    }

    if (res == "E" || res == "T" || res == "O" || res == "V") {
      document.getElementById("from").focus();
    }
    if (
      res !== "" &&
      res !== "E" &&
      res !== "T" &&
      res !== "V" &&
      res !== "O"
    ) {
      alert("error");
      setRes("");
    }
    if (
      from == "1A" ||
      from == "1B" ||
      from == "1C" ||
      from == "1D" ||
      from == "2A" ||
      from == "2B" ||
      from == "2C" ||
      from == "2D" ||
      from == "3A" ||
      from == "3B" ||
      from == "3C" ||
      from == "3D" ||
      from == "4A" ||
      from == "4B" ||
      from == "4C" ||
      from == "4D" ||
      from == "5A" ||
      from == "5B" ||
      from == "5C" ||
      from == "5D" ||
      from == "6A" ||
      from == "6B" ||
      from == "6C" ||
      from == "6D" ||
      from == "7A" ||
      from == "7B" ||
      from == "7C" ||
      from == "7D" ||
      from == "8A" ||
      from == "8B" ||
      from == "8C" ||
      from == "8D" ||
      from == "9A" ||
      from == "9B" ||
      from == "9C" ||
      from == "9D"
    ) {
      document.getElementById("to").focus();
    }

    if (
      to == "1A" ||
      to == "1B" ||
      to == "1C" ||
      to == "1D" ||
      to == "2A" ||
      to == "2B" ||
      to == "2C" ||
      to == "2D" ||
      to == "3A" ||
      to == "3B" ||
      to == "3C" ||
      to == "3D" ||
      to == "4A" ||
      to == "4B" ||
      to == "4C" ||
      to == "4D" ||
      to == "5A" ||
      to == "5B" ||
      to == "5C" ||
      to == "5D" ||
      to == "6A" ||
      to == "6B" ||
      to == "6C" ||
      to == "6D" ||
      to == "7A" ||
      to == "7B" ||
      to == "7C" ||
      to == "7D" ||
      to == "8A" ||
      to == "8B" ||
      to == "8C" ||
      to == "8D" ||
      to == "9A" ||
      to == "9B" ||
      to == "9C" ||
      to == "9D"
    ) {
      document.getElementById("point").focus();
    }

    if (point !== "" && point !== "H" && point !== "G") {
      alert("error");
      setPoint("");
    }
  }, [ball, deg, from, num, to, point, skill, res]);
  const [show, setShow] = useState(false);
  const [showH1, setShowH1] = useState(false);
  const [showG, setShowG] = useState(false);
  const [showG1, setShowG1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (val) => {
    setShow(true);
    console.log(val);
    setValue(val);
  };
  const handleCloseG = () => setShowG(false);
  const handleShowG = (val) => {
    setShowG(true);
    //console.log(val);
    setValue2(val);
  };
  const handleCloseG1 = () => setShowG1(false);
  const handleShowG1 = (val) => {
    setShowG1(true);
    //console.log(val);
    setValue2(val);
  };
  const handleCloseH1 = () => setShowH1(false);
  const handleShowH1 = (val) => {
    console.log(val);
    setShowH1(true);
    setValue(val);
  };
  const handleH = () => {
    setBall("H");
    document.getElementById("num").focus();
  };
  const handleG = () => {
    setBall("G");
    document.getElementById("num").focus();
  };
  const handleId1 = () => {
    if (ball == "H") {
      setNum(id1.num);
    } else if (ball == "G") {
      setNum(id11.num);
    } else {
      setNum("");
    }
  };
  const handleId2 = () => {
    if (ball == "H") {
      setNum(id2.num);
    } else if (ball == "G") {
      setNum(id22.num);
    } else {
      setNum("");
    }
  };
  const handleId3 = () => {
    if (ball == "H") {
      setNum(id3.num);
    } else if (ball == "G") {
      setNum(id33.num);
    } else {
      setNum("");
    }
  };
  const handleId4 = () => {
    if (ball == "H") {
      setNum(id4.num);
    } else if (ball == "G") {
      setNum(id44.num);
    } else {
      setNum("");
    }
  };
  const handleId5 = () => {
    if (ball == "H") {
      setNum(id5.num);
    } else if (ball == "G") {
      setNum(id55.num);
    } else {
      setNum("");
    }
  };
  const handleId6 = () => {
    if (ball == "H") {
      setNum(id6.num);
    } else if (ball == "G") {
      setNum(id66.num);
    } else {
      setNum("");
    }
  };
  const handleS = () => {
    setSkill("S");
  };
  const handleR = () => {
    setSkill("R");
  };
  const handleP = () => {
    setSkill("P");
  };
  const handleA = () => {
    setSkill("A");
  };
  const handleB = () => {
    setSkill("B");
  };
  const handleD = () => {
    setSkill("D");
  };
  const handleDegE = () => {
    setRes("E");
  };
  const handleDegT = () => {
    setRes("T");
  };
  const handleDegO = () => {
    setRes("O");
  };
  const handleDegV = () => {
    setRes("V");
  };
  const handle1 = () => {
    if (!from) {
      setFrom("1");
    } else if (from != "1A" || from != "1C" || from != "1B" || from != "1D") {
      setTo("1");
    }
  };
  const handle2 = () => {
    if (!from) {
      setFrom("2");
    } else if (from != "2A" || from != "2C" || from != "2B" || from != "2D") {
      setTo("2");
    }
  };
  const handle3 = () => {
    if (!from) {
      setFrom("3");
    } else if (from != "3A" || from != "3C" || from != "3B" || from != "3D") {
      setTo("3");
    }
  };
  const handle4 = () => {
    if (!from) {
      setFrom("4");
    } else if (from != "4A" || from != "4C" || from != "4B" || from != "4D") {
      setTo("4");
    }
  };
  const handle5 = () => {
    if (!from) {
      setFrom("5");
    } else if (from != "5A" || from != "5C" || from != "5B" || from != "5D") {
      setTo("5");
    }
  };
  const handle6 = () => {
    if (!from) {
      setFrom("6");
    } else if (from != "6A" || from != "6C" || from != "6B" || from != "6D") {
      setTo("6");
    }
  };
  const handle7 = () => {
    if (!from) {
      setFrom("7");
    } else if (from != "7A" || from != "7C" || from != "7B" || from != "7D") {
      setTo("7");
    }
  };
  const handle8 = () => {
    if (!from) {
      setFrom("8");
    } else if (from != "8A" || from != "8C" || from != "8B" || from != "8D") {
      setTo("8");
    }
  };
  const handle9 = () => {
    if (!from) {
      setFrom("9");
    } else if (from != "9A" || from != "9C" || from != "9B" || from != "9D") {
      setTo("9");
    }
  };
  const handleSA = () => {
    if (from == "1") {
      setFrom("1A");
    } else if (from == "2") {
      setFrom("2A");
    } else if (from == "3") {
      setFrom("3A");
    } else if (from == "4") {
      setFrom("4A");
    } else if (from == "5") {
      setFrom("5A");
    } else if (from == "6") {
      setFrom("6A");
    } else if (from == "7") {
      setFrom("7A");
    } else if (from == "8") {
      setFrom("8A");
    } else if (from == "9") {
      setFrom("9A");
    }
    if (to == "1") {
      setTo("1A");
    } else if (to == "2") {
      setTo("2A");
    } else if (to == "3") {
      setTo("3A");
    } else if (to == "4") {
      setTo("4A");
    } else if (to == "5") {
      setTo("5A");
    } else if (to == "6") {
      setTo("6A");
    } else if (to == "7") {
      setTo("7A");
    } else if (to == "8") {
      setTo("8A");
    } else if (to == "9") {
      setTo("9A");
    }
  };
  const handleSB = () => {
    if (from == "1") {
      setFrom("1B");
    } else if (from == "2") {
      setFrom("2B");
    } else if (from == "3") {
      setFrom("3B");
    } else if (from == "4") {
      setFrom("4B");
    } else if (from == "5") {
      setFrom("5B");
    } else if (from == "6") {
      setFrom("6B");
    } else if (from == "7") {
      setFrom("7B");
    } else if (from == "8") {
      setFrom("8B");
    } else if (from == "9") {
      setFrom("9B");
    }
    if (to == "1") {
      setTo("1B");
    } else if (to == "2") {
      setTo("2B");
    } else if (to == "3") {
      setTo("3B");
    } else if (to == "4") {
      setTo("4B");
    } else if (to == "5") {
      setTo("5B");
    } else if (to == "6") {
      setTo("6B");
    } else if (to == "7") {
      setTo("7B");
    } else if (to == "8") {
      setTo("8B");
    } else if (to == "9") {
      setTo("9B");
    }
  };
  const handleSC = () => {
    if (from == "1") {
      setFrom("1C");
    } else if (from == "2") {
      setFrom("2C");
    } else if (from == "3") {
      setFrom("3C");
    } else if (from == "4") {
      setFrom("4C");
    } else if (from == "5") {
      setFrom("5C");
    } else if (from == "6") {
      setFrom("6C");
    } else if (from == "7") {
      setFrom("7C");
    } else if (from == "8") {
      setFrom("8C");
    } else if (from == "9") {
      setFrom("9C");
    }
    if (to == "1") {
      setTo("1C");
    } else if (to == "2") {
      setTo("2C");
    } else if (to == "3") {
      setTo("3C");
    } else if (to == "4") {
      setTo("4C");
    } else if (to == "5") {
      setTo("5C");
    } else if (to == "6") {
      setTo("6C");
    } else if (to == "7") {
      setTo("7C");
    } else if (to == "8") {
      setTo("8C");
    } else if (to == "9") {
      setTo("9C");
    }
  };
  const handleSD = () => {
    if (from == "1") {
      setFrom("1D");
    } else if (from == "2") {
      setFrom("2D");
    } else if (from == "3") {
      setFrom("3D");
    } else if (from == "4") {
      setFrom("4D");
    } else if (from == "5") {
      setFrom("5D");
    } else if (from == "6") {
      setFrom("6D");
    } else if (from == "7") {
      setFrom("7D");
    } else if (from == "8") {
      setFrom("8D");
    } else if (from == "9") {
      setFrom("9D");
    }
    if (to == "1") {
      setTo("1D");
    } else if (to == "2") {
      setTo("2D");
    } else if (to == "3") {
      setTo("3D");
    } else if (to == "4") {
      setTo("4D");
    } else if (to == "5") {
      setTo("5D");
    } else if (to == "6") {
      setTo("6D");
    } else if (to == "7") {
      setTo("7D");
    } else if (to == "8") {
      setTo("8D");
    } else if (to == "9") {
      setTo("9D");
    }
  };

  return (
    <div
      className="stadium"
      style={{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        margin: "10px 10px",
        fontSize: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "50px",
        }}
      >
        <Form.Group
          className="mb-3"
          controlId=""
          style={{ display: "flex", fontSize: "10px" }}
        >
          <input
            type="text"
            id="ball"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={ball}
            onChange={(e) => setBall(e.target.value)}
          />
          <input
            id="num"
            type="text"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <input
            type="text"
            id="skill"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />

          <input
            type="text"
            id="res"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={res}
            onChange={(e) => setRes(e.target.value)}
          />
          <input
            type="text"
            id="from"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type="text"
            id="to"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <input
            type="text"
            id="point"
            style={{ width: "10%", fontSize: "10px", height: "15%" }}
            value={point}
            onKeyDown={handleKey}
            onChange={(e) => setPoint(e.target.value)}
          />
        </Form.Group>
      </div>
      <div className="positions1">
        <div className="top1">
          <input
            className="mb-3"
            style={{ background: isLibro11 ? "yellow" : "#fff" }}
            type="text"
            value={id11?.num}
            onClick={id11?.num ? () => handleShowG1(id11.num) : null}
          />
          <input
            className="mb-3"
            type="text"
            style={{ background: isLibro66 ? "yellow" : "#fff" }}
            value={id66?.num}
            onClick={id66?.num ? () => handleShowG1(id66.num) : null}
          />
          <input
            className="mb-3"
            style={{ background: isLibro55 ? "yellow" : "#fff" }}
            type="text"
            value={id55?.num}
            onClick={id55?.num ? () => handleShowG1(id55.num) : null}
          />
        </div>
        <div>
          <input
            className="mb-3"
            style={{ background: isLibro22 ? "yellow" : "#fff" }}
            type="text"
            value={id22?.num}
            onClick={id22?.num ? () => handleShowG(id22.num) : null}
          />
          <input
            className="mb-3"
            style={{ background: isLibro33 ? "yellow" : "#fff" }}
            type="text"
            value={id33?.num}
            onClick={id33?.num ? () => handleShowG(id33.num) : null}
          />
          <input
            className="mb-3"
            style={{ background: isLibro44 ? "yellow" : "#fff" }}
            type="text"
            value={id44?.num}
            onClick={id44?.num ? () => handleShowG(id44.num) : null}
          />
        </div>
        <input className="mb1-33" type="text" value={"G"} />

        {ball == "G" ? (
          <SportsVolleyballIcon
            className="mb1-33"
            style={{
              marginLeft: "60px",
              marginTop: "-30px",
              border: "3px solid #fff",
              color: "blue",
            }}
          />
        ) : null}
      </div>
      <div
        className="stad"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="img-stad"
          id="imgStad"
          src={stad}
          style={{ width: "60%" }}
        />
      </div>
      <div className="positions">
        <div className="rotateH">
          <div className="top">
            <input
              className="mb-3"
              style={{
                background: isLibro4 ? "yellow" : "#fff",
                cursor: "pointer",
              }}
              type="text"
              value={id4?.num}
              onClick={id4?.num ? () => handleShow(id4.num) : null}
            />
            <input
              className="mb-3"
              style={{ background: isLibro3 ? "yellow" : "#fff" }}
              type="text"
              value={id3?.num}
              onClick={id3?.num ? () => handleShow(id3.num) : null}
            />

            <input
              className="mb-3"
              style={{ background: isLibro2 ? "yellow" : "#fff" }}
              type="text"
              value={id2?.num}
              onClick={id2?.num ? () => handleShow(id2.num) : null}
            />
          </div>
          <div>
            <input
              className="mb-3"
              type="text"
              style={{ background: isLibro5 ? "yellow" : "#fff" }}
              value={id5?.num}
              onClick={id5?.num ? () => handleShowH1(id5.num) : null}
            />
            <input
              className="mb-3"
              type="text"
              style={{ background: isLibro6 ? "yellow" : "#fff" }}
              value={id6?.num}
              onClick={id6?.num ? () => handleShowH1(id6.num) : null}
            />
            <input
              className="mb-3"
              style={{ background: isLibro1 ? "yellow" : "#fff" }}
              type="text"
              value={id1?.num}
              onClick={id1?.num ? () => handleShowH1(id1.num) : null}
            />
          </div>
        </div>
        <input className="mb-33" type="text" value={"H"} />

        {ball == "H" ? (
          <SportsVolleyballIcon
            className="mb-33"
            style={{
              marginLeft: "60px",

              border: "3px solid #fff",
              color: "red",
            }}
          />
        ) : null}
      </div>

      <div>
        <H3 show={show} handleClose={handleClose} moves={moves} num={value} />
        <G3
          show={showG}
          handleClose={handleCloseG}
          moves={moves}
          num={value2}
        />

        <H1
          show={showH1}
          handleClose={handleCloseH1}
          moves={moves}
          num={value}
        />
        <G1
          show={showG1}
          handleClose={handleCloseG1}
          moves={moves}
          num={value2}
        />
      </div>
      <div
        className="boxes"
        style={{ position: "absolute", top: "90%", left: "20%" }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "5px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleH}
          >
            H
          </button>
          <button
            style={{
              fontSize: "10px",

              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleG}
          >
            G
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "5px",
          }}
        >
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleId1}
          >
            1
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleId2}
          >
            2
          </button>
          <button
            style={{
              fontSize: "10px",
              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleId3}
          >
            3
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleId4}
          >
            4
          </button>
          <button
            style={{
              fontSize: "10px",
              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleId5}
          >
            5
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleId6}
          >
            6
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "5px",
          }}
        >
          <button
            style={{
              fontSize: "10px",

              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleS}
          >
            S
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleR}
          >
            R
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleP}
          >
            P
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleA}
          >
            A
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleB}
          >
            B
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleD}
          >
            D
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "5px",
          }}
        >
          <button
            style={{
              fontSize: "10px",

              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleDegE}
          >
            E
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleDegT}
          >
            T
          </button>
          <button
            style={{
              fontSize: "10px",
              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleDegO}
          >
            O
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleDegV}
          >
            V
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "5px",
          }}
        >
          <button
            style={{
              fontSize: "10px",

              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handle1}
          >
            1
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handle2}
          >
            2
          </button>
          <button
            style={{
              fontSize: "10px",
              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handle3}
          >
            3
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handle4}
          >
            4
          </button>
          <button
            style={{
              fontSize: "10px",
              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handle5}
          >
            5
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handle6}
          >
            6
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handle7}
          >
            7
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handle8}
          >
            8
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handle9}
          >
            9
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "5px",
          }}
        >
          <button
            style={{
              fontSize: "10px",

              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleSA}
          >
            A
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleSB}
          >
            B
          </button>
          <button
            style={{
              fontSize: "10px",
              marginLeft: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
            }}
            onClick={handleSC}
          >
            C
          </button>
          <button
            style={{
              fontSize: "10px",
              width: "30px",
              height: "20px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
            onClick={handleSD}
          >
            D
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stadium;
