import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import ListGroup from "react-bootstrap/ListGroup";
import { Button, Table } from "react-bootstrap";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PlayerId2 from "./PlayerId2";
import axios from "axios";
import Change2 from "./Change2";
const Team = ({
  index,

  ps,
  setPs,
  libro1,
  setLibro1,
  libro2,
  setLibro2,
  data,
  handleRound,
  setData,
  setNewPlayers1,
  newPlayers1,
  players,

  changes,
  setChanges,
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
  const [points, setPoints] = useState("");
  const [dataMatch, setDataMatch] = useState([]);

  const [team, setTeam] = useState("");

  const handleLibro1 = () => {
    console.log(libro1);
  };
  const handleKey1 = (e) => {
    e.key == "Enter" && handleLibro1();
  };
  const handleLibro2 = () => {
    console.log(libro2);
  };
  const handleKey2 = (e) => {
    e.key == "Enter" && handleLibro2();
  };
  const [dataPlayers, setDataPlayers] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      let name_db = localStorage.getItem("name_db")
        ? localStorage.getItem("name_db")
        : null;
      //console.log(name_db);

      const res = await axios.get(`/api/players/${name_db}`);
      console.log(res.data[0].players2);
      setTeam(res.data[0].team2);
      setDataPlayers(res.data[0].players2);
    };
    fetchedData();
  }, []);
  useEffect(() => {
    const fetchMatch = async () => {
      let name_db = localStorage.getItem("name_db")
        ? localStorage.getItem("name_db")
        : null;
      const res = await axios.get(`/api/match/${name_db}`);
      console.log(res);
      setPointsG(
        res?.data?.filter(
          (x) =>
            (x.ball == "G" && x.result == "T") ||
            (x.ball == "H" && x.result == "E")
        ).length
      );
      setDataMatch(res.data);
    };
    fetchMatch();
  }, [data]);
  const deleteChange = (i) => {
    // changes.splice(i, 1);
    setChanges(changes.splice(1));
    console.log(changes);
  };
  const rotatePlayers = () => {
    if (
      id33.position == "Libero" ||
      id44.position == "Libero" ||
      id55.position == "Libero"
    ) {
      alert("يجب تغيير الليبرو");
    } else {
      if (id66.position == "Libero") {
        setIsLibro66(false);
        setIsLibro55(true);
        setId55(id66);
      } else {
        setId55(id66);
      }
      if (id11.position == "Libero") {
        setIsLibro11(false);
        setIsLibro66(true);
        setId66(id11);
      } else {
        setId66(id11);
      }
      setId11(id22);
      setId22(id33);
      setId33(id44);
      setId44(id55);
    }
  };
  const reversePlayers = () => {
    if (
      id33.position == "Libero" ||
      id44.position == "Libero" ||
      id11.position == "Libero"
    ) {
      alert("يجب تغيير الليبرو");
    } else {
      setId55(id44);
      setId44(id33);
      setId33(id22);
      setId22(id11);

      if (id66.position == "Libero") {
        setIsLibro66(false);
        setIsLibro11(true);
        setId11(id66);
      } else {
        setId11(id66);
      }
      if (id55.position == "Libero") {
        setIsLibro55(false);
        setIsLibro66(true);
        setId66(id55);
      } else {
        setId66(id55);
      }
    }
  };
  const [color, setColor] = useState("");
  const [pointsG, setPointsG] = useState(0);
  return (
    <div style={{ color: color, width: "50%", fontSize: "10px" }}>
      <Form.Group
        className="mb-3"
        controlId=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Form.Label>اسم الفريق {index}</Form.Label>
          <Form.Control
            type="text"
            value={team}
            style={{ fontSize: "10px", width: "70px" }}
          />
        </div>

        <div>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>عدد النقاط</Form.Label>

            <Form.Control
              type="Number"
              value={pointsG}
              style={{ fontSize: "10px", width: "50px" }}
            />
          </Form.Group>
        </div>
        <div style={{ marginTop: "15px" }}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      </Form.Group>
      <div className="div1-team-flex">
        <div style={{ height: "274px", overflowY: "scroll", width: "250px" }}>
          <table striped bordered hover style={{ height: "100%" }}>
            <tbody>
              {dataPlayers?.map((p, i) => {
                return (
                  <tr style={{ fontSize: "10px", height: "2px" }}>
                    <PlayerId2
                      index={i}
                      p={p}
                      ps={ps}
                      setPs={setPs}
                      setNewPlayers1={setNewPlayers1}
                      newPlayers1={newPlayers1}
                      changes={changes}
                      setChanges={setChanges}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div
          style={{
            backgroundColor: color,
            height: "150px",
            width: "60px",
            textAlign: "left",
          }}
        >
          <ListGroup style={{ backgroundColor: color }}>
            <ListGroup.Item
              style={{ backgroundColor: color, cursor: "pointer" }}
            >
              <Button
                variant="outlined"
                style={{ fontSize: "10px" }}
                onClick={() => setPointsG((point) => (point += 1))}
              >
                اضافة نقطة
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: color, cursor: "pointer" }}
            >
              <Button
                variant="outlined"
                style={{ fontSize: "10px" }}
                onClick={() => setPointsG((point) => (point -= 1))}
              >
                خصم نقطة
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: color, cursor: "pointer" }}
            >
              <Button
                onClick={reversePlayers}
                style={{ fontSize: "10px" }}
                variant="outlined"
              >
                لفة عكسية
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: color, cursor: "pointer" }}
            >
              <Button
                onClick={rotatePlayers}
                style={{ fontSize: "10px" }}
                variant="outlined"
              >
                لفة عادية
              </Button>
            </ListGroup.Item>
          </ListGroup>
          <div>
            <Button
              variant="danger"
              style={{ fontSize: "10px" }}
              onClick={deleteChange}
            >
              حذف تغير
            </Button>
            <Form.Group
              className="mb-3"
              controlId=""
              style={{ marginTop: "10px" }}
            >
              <Change2 players={changes} />
            </Form.Group>
          </div>
        </div>
      </div>

      <div className="div2-team-flex" style={{ fontSize: "10px" }}></div>
    </div>
  );
};

export default Team;
