import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ListPlayers from "../../components/players/ListPlayers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addDbsAction } from "../../redux/action/dbsAction";
import { useSelector, useDispatch } from "react-redux";
import Dbs from "../../components/game/Dbs";
const Add = () => {
  const dispatch = useDispatch();
  const addDbs = useSelector((state) => state.addDbs);
  const { error, loading } = addDbs;
  const navigator = useNavigate();
  const [champ, setChamp] = useState("");
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});
  const [players1, setPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [nums, setNums] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 30, 55,
  ]);
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());
  const [date, setDate] = useState(defaultDate);
  const onSetDate = (event) => {
    setDate(new Date(event.target.value));
  };
  const handleSubmit = async () => {
    localStorage.setItem(
      "name_db",
      `${team1.replace(/\s/g, "").substring(0, 5)}_${team2
        .replace(/\s/g, "")
        .substring(0, 5)}_${date
        .toString()
        .replace(/\s/g, "")
        .substring(0, 14)}`
    );
    let name_db = localStorage.getItem("name_db")
      ? localStorage.getItem("name_db")
      : null;
    const data = {
      team1,
      team2,
      champ,
      date,
      players1,
      players2,
      name_db,
    };

    if (team1 == null || team2 == null || team1 == "" || team2 == "") {
      alert("ادخل الاندية");
    } else if (champ == null || champ == "") {
      alert("ادخل البطولة");
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(data);
      await axios.post(`/api/players`, data, config);
      const db = `${team1.replace(/\s/g, "").substring(0, 5)}_${team2
        .replace(/\s/g, "")
        .substring(0, 5)}_${date
        .toString()
        .replace(/\s/g, "")
        .substring(0, 14)}`;
      dispatch(addDbsAction({ name: db }));
      localStorage.setItem("data", JSON.stringify(data));
      navigator("/match");
    }
  };

  return (
    <Container>
      <Dbs />
      <h6 style={{ textAlign: "right" }}>اضافة مباراة جديدة</h6>
      <Form style={{ fontSize: "20px", marginTop: "10px", fontWeight: "bold" }}>
        <div className="listplayers">
          <ListPlayers
            index={"الثاني"}
            color="blue"
            team={team2}
            players={players2}
            player={player2}
            setPlayer={setPlayer2}
            setPlayers={setPlayers2}
            setTeam={setTeam2}
            nums={nums}
          />
          <div className="form" style={{ textAlign: "right" }}>
            <Form.Group
              className="mb-3"
              controlId=""
              style={{ fontSize: "10px", display: "flex", fontWeight: "bold" }}
            >
              <Form.Control
                type="text"
                placeholder="ادخل البطولة"
                value={champ}
                onChange={(e) => setChamp(e.target.value)}
                style={{
                  fontSize: "10px",
                  textAlign: "right",
                  width: "80%",
                  marginRight: "10px",
                  fontWeight: "bold",
                }}
              />
              <Form.Label>البطولة</Form.Label>
            </Form.Group>

            <Form.Group
              className="mb-3"
              style={{ fontSize: "10px", display: "flex" }}
            >
              <Form.Control
                id="disabledTextInput"
                type="date"
                value={date.toLocaleDateString("en-CA")}
                onChange={onSetDate}
                style={{
                  fontSize: "10px",
                  textAlign: "right",
                  marginRight: "10px",
                  width: "80%",
                  fontWeight: "bold",
                }}
              />
              <Form.Label>التاريخ</Form.Label>
            </Form.Group>
            <div
              style={{
                width: "50%",
                margin: "5px auto",
              }}
            >
              <Button
                variant="dark"
                style={{ marginLeft: "10px", width: "100%" }}
                onClick={handleSubmit}
              >
                حفظ
              </Button>
            </div>
          </div>

          <ListPlayers
            index={"الاول"}
            color="red"
            team={team1}
            players={players1}
            player={player1}
            setPlayer={setPlayer1}
            setPlayers={setPlayers1}
            setTeam={setTeam1}
            nums={nums}
          />
        </div>
      </Form>
    </Container>
  );
};

export default Add;
