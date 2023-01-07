import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Table } from "react-bootstrap";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import PlayerId from "./PlayerId";
import axios from "axios";
import Change1 from "./Change1";
const Team = ({
  index,
  ps,
  setPs,
  data,
  handleRound,
  setData,

  changes,
  setChanges,
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
}) => {
  const [dataPlayers, setDataPlayers] = useState([]);
  const [dataMatch, setDataMatch] = useState([]);
  const [inn, setInn] = useState("");
  const [out, setOut] = useState("");
  const [team, setTeam] = useState("");
  useEffect(() => {
    const fetchedData = async () => {
      let name_db = localStorage.getItem("name_db")
        ? localStorage.getItem("name_db")
        : null;
      console.log(name_db);
      const res = await axios.get(`/api/players/${name_db}`);
      console.log(res);
      setDataPlayers(res.data[0].players1);
      setTeam(res.data[0].team1);
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
      setPointsH(
        res?.data?.filter(
          (x) =>
            (x.ball == "H" && x.result == "T") ||
            (x.ball == "G" && x.result == "E")
        ).length
      );
      setDataMatch(res.data);
    };
    fetchMatch();
  }, [data]);
  const [pointsH, setPointsH] = useState(
    dataMatch?.filter((x) => x.ball == "H").length
  );
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addChange = () => {
    handleClose();
    const ch = {
      inn,
      out,
    };
    setChanges((change) => [...change, ch]);
    console.log(changes);
  };
  const deleteChange = (i) => {
    // changes.splice(i, 1);
    setChanges(changes.splice(1));
    console.log(changes);
  };
  const rotatePlayers = () => {
    if (
      id3.position == "Libero" ||
      id4.position == "Libero" ||
      id5.position == "Libero"
    ) {
      alert("يجب تغيير الليبرو");
    } else {
      if (id6.position == "Libero") {
        setIsLibro6(false);
        setIsLibro5(true);
        setId5(id6);
      } else {
        setId5(id6);
      }
      if (id1.position == "Libero") {
        setIsLibro1(false);
        setIsLibro6(true);
        setId6(id1);
      } else {
        setId6(id1);
      }
      setId1(id2);
      setId2(id3);
      setId3(id4);
      setId4(id5);
    }
  };
  const reversePlayers = () => {
    if (
      id3.position == "Libero" ||
      id4.position == "Libero" ||
      id1.position == "Libero"
    ) {
      alert("يجب تغيير الليبرو");
    } else {
      setId5(id4);
      setId4(id3);
      setId3(id2);
      setId2(id1);

      if (id6.position == "Libero") {
        setIsLibro6(false);
        setIsLibro1(true);
        setId1(id6);
      } else {
        setId1(id6);
      }
      if (id5.position == "Libero") {
        setIsLibro5(false);
        setIsLibro6(true);
        setId6(id5);
      } else {
        setId6(id5);
      }
    }
  };
  const addPoint = () => {
    setPointsH((point) => (point += 1));
  };
  const deletePoint = () => {
    setPointsH((point) => (point -= 1));
  };
  window.onkeydown = (evt) => {
    switch (evt.keyCode) {
      //F1
      case 112:
        addPoint();
        break;
      //Fallback to default browser behaviour
      default:
        return true;
    }
    return false;
  };

  const [color, setColor] = useState("");
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
              value={pointsH}
              style={{ fontSize: "10px", width: "60px" }}
            />
          </Form.Group>
        </div>

        <div style={{ marginTop: "25px" }}>
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
              {dataPlayers?.map((p, i) => (
                <PlayerId
                  key={i}
                  index={i}
                  p={p}
                  ps={ps}
                  setPs={setPs}
                  changes={changes}
                  setChanges={setChanges}
                  dataPlayers={dataPlayers}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            backgroundColor: color,
            height: "50px",
            width: "60px",
            textAlign: "left",
          }}
        >
          <ListGroup
            style={{
              backgroundColor: color,
              textAlign: "center",
            }}
          >
            <ListGroup.Item
              style={{ backgroundColor: color, cursor: "pointer" }}
            >
              <Button
                variant="outlined"
                style={{ fontSize: "10px", textAlign: "left" }}
                onClick={addPoint}
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
                onClick={deletePoint}
              >
                خصم نقطة
              </Button>
            </ListGroup.Item>
            <ListGroup.Item
              style={{ backgroundColor: color, cursor: "pointer" }}
            >
              <Button
                style={{ fontSize: "10px" }}
                variant="outlined"
                onClick={reversePlayers}
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
              <Change1 players={changes} deleteChange={deleteChange} />
            </Form.Group>
          </div>
        </div>
      </div>

      <div className="div2-team-flex" style={{ fontSize: "10px" }}>
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>التغيرات</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                value={inn}
                placeholder="ادخل رقم اللاعب الداخل"
                onChange={(e) => setInn(e.target.value)}
              />
              <input
                type="text"
                value={out}
                placeholder="ادخل رقم اللاعب الخارج"
                onChange={(e) => setOut(e.target.value)}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                غلق
              </Button>
              <Button variant="primary" onClick={addChange}>
                حفظ التتغيرات
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
};

export default Team;
