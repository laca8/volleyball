import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import TableMatch from "../../components/game/TableMatch";
import Stadium from "../../components/game/Stadium";
import Team1 from "../../components/game/Team1";
import Team2 from "../../components/game/Team2";
const Match = () => {
  const playersMatch = [];

  const [pointsH, setPointsH] = useState(0);
  const [pointsG, setPointsG] = useState(0);
  const [players1, setPlayers1] = useState([]);
  const [newPlayers1, setNewPlayers1] = useState([]);
  const [players2, setPlayers2] = useState([]);
  const [newPlayers2, setNewPlayers2] = useState([]);
  const [libro11, setLibro11] = useState("");
  const [libro12, setLibro12] = useState("");
  const [libro21, setLibro21] = useState("");
  const [libro22, setLibro22] = useState("");

  const [isLibro1, setIsLibro1] = useState(false);
  const [isLibro2, setIsLibro2] = useState(false);
  const [isLibro3, setIsLibro3] = useState(false);
  const [isLibro4, setIsLibro4] = useState(false);
  const [isLibro5, setIsLibro5] = useState(false);
  const [isLibro6, setIsLibro6] = useState(false);

  const [isLibro11, setIsLibro11] = useState(false);
  const [isLibro22, setIsLibro22] = useState(false);
  const [isLibro33, setIsLibro33] = useState(false);
  const [isLibro44, setIsLibro44] = useState(false);
  const [isLibro55, setIsLibro55] = useState(false);
  const [isLibro66, setIsLibro66] = useState(false);
  const [data, setData] = useState([]);

  const [id1, setId1] = useState({ num: "", position: "" });
  const [id2, setId2] = useState({ num: "", position: "" });
  const [id3, setId3] = useState({ num: "", position: "" });
  const [id4, setId4] = useState({ num: "", position: "" });
  const [id5, setId5] = useState({ num: "", position: "" });
  const [id6, setId6] = useState({ num: "", position: "" });

  const [id11, setId11] = useState({ num: "", position: "" });
  const [id22, setId22] = useState({ num: "", position: "" });
  const [id33, setId33] = useState({ num: "", position: "" });
  const [id44, setId44] = useState({ num: "", position: "" });
  const [id55, setId55] = useState({ num: "", position: "" });
  const [id66, setId66] = useState({ num: "", position: "" });

  const handleRoundH = () => {
    players1.push(players1.shift());
    console.log(newPlayers1);
    setPlayers1(players1);
    console.log(players1);
    setId1(newPlayers1[0]?.num);
    setId2(newPlayers1[1]?.num);
    setId3(newPlayers1[2]?.num);
    setId4(newPlayers1[3]?.num);
    setId5(newPlayers1[4]?.num);
    setId6(newPlayers1[5]?.num);
  };
  const handleRoundG = () => {
    if (
      newPlayers2[2]?.num == libro21 ||
      newPlayers2[2]?.num == libro22 ||
      newPlayers2[4]?.num == libro21 ||
      newPlayers2[4]?.num == libro22 ||
      newPlayers2[3]?.num == libro21 ||
      newPlayers2[3]?.num == libro22
    ) {
      alert("يجب تغير الليبرو");
    } else {
      players2.push(players2.shift());
      console.log(players2);
      setNewPlayers2(players2);
      //return newPlayers1;
      setId11(newPlayers2[0]?.num);
      setId22(newPlayers2[1]?.num);
      setId33(newPlayers2[2]?.num);
      setId44(newPlayers2[3]?.num);
      setId55(newPlayers2[4]?.num);
      setId66(newPlayers2[5]?.num);
    }
  };
  const [changes1, setChanges1] = useState([]);
  const [changes2, setChanges2] = useState([]);
  return (
    <Container>
      <TableMatch data={data} />
      <div className="div-flex">
        <Team2
          color="red"
          index={"G"}
          team=""
          ps={players2}
          setPs={setPlayers2}
          handleRound={handleRoundG}
          data={data}
          setData={setData}
          players={playersMatch}
          setPointsG={setPointsG}
          pointsG={pointsG}
          changes={changes2}
          setChanges={setChanges2}
          id11={id11}
          setId11={setId11}
          id22={id22}
          setId22={setId22}
          id33={id33}
          setId33={setId33}
          id44={id44}
          setId44={setId44}
          id55={id55}
          setId55={setId55}
          id66={id66}
          setId66={setId66}
          isLibro11={isLibro11}
          setIsLibro11={setIsLibro11}
          isLibro22={isLibro22}
          setIsLibro22={setIsLibro22}
          isLibro33={isLibro33}
          setIsLibro33={setIsLibro33}
          isLibro44={isLibro44}
          setIsLibro44={setIsLibro44}
          isLibro55={isLibro55}
          setIsLibro55={setIsLibro55}
          isLibro66={isLibro66}
          setIsLibro66={setIsLibro66}
        />

        <Stadium
          players1={players1}
          players2={players2}
          data={data}
          setData={setData}
          newPlayers1={newPlayers1}
          id1={id1}
          setId1={setId1}
          id2={id2}
          setId2={setId2}
          id3={id3}
          setId3={setId3}
          id4={id4}
          setId4={setId4}
          id5={id5}
          setId5={setId5}
          id6={id6}
          setId6={setId6}
          id11={id11}
          setId11={setId11}
          id22={id22}
          setId22={setId22}
          id33={id33}
          setId33={setId33}
          id44={id44}
          setId44={setId44}
          id55={id55}
          setId55={setId55}
          id66={id66}
          setId66={setId66}
          libro11={libro11}
          libro12={libro12}
          libro21={libro21}
          libro22={libro22}
          players={playersMatch}
          setPointsH={setPointsH}
          pointsH={pointsH}
          setPointsG={setPointsG}
          pointsG={pointsG}
          isLibro1={isLibro1}
          setIsLibro1={setIsLibro1}
          isLibro2={isLibro2}
          setIsLibro2={setIsLibro2}
          isLibro3={isLibro3}
          setIsLibro3={setIsLibro3}
          isLibro4={isLibro4}
          setIsLibro4={setIsLibro4}
          isLibro5={isLibro5}
          setIsLibro5={setIsLibro5}
          isLibro6={isLibro6}
          setIsLibro6={setIsLibro6}
          isLibro11={isLibro11}
          setIsLibro11={setIsLibro11}
          isLibro22={isLibro22}
          setIsLibro22={setIsLibro22}
          isLibro33={isLibro33}
          setIsLibro33={setIsLibro33}
          isLibro44={isLibro44}
          setIsLibro44={setIsLibro44}
          isLibro55={isLibro55}
          setIsLibro55={setIsLibro55}
          isLibro66={isLibro66}
          setIsLibro66={setIsLibro66}
        />
        <Team1
          color="blue"
          index={"H"}
          team=""
          ps={players1}
          setPs={setPlayers1}
          data={data}
          setData={setData}
          handleRound={handleRoundH}
          newPlayers1={newPlayers1}
          setNewPlayers1={setNewPlayers1}
          players={playersMatch}
          setPointsH={setPointsH}
          pointsH={pointsH}
          changes={changes1}
          setChanges={setChanges1}
          id1={id1}
          setId1={setId1}
          id2={id2}
          setId2={setId2}
          id3={id3}
          setId3={setId3}
          id4={id4}
          setId4={setId4}
          id5={id5}
          setId5={setId5}
          id6={id6}
          setId6={setId6}
          isLibro1={isLibro1}
          setIsLibro1={setIsLibro1}
          isLibro2={isLibro2}
          setIsLibro2={setIsLibro2}
          isLibro3={isLibro3}
          setIsLibro3={setIsLibro3}
          isLibro4={isLibro4}
          setIsLibro4={setIsLibro4}
          isLibro5={isLibro5}
          setIsLibro5={setIsLibro5}
          isLibro6={isLibro6}
          setIsLibro6={setIsLibro6}
        />
      </div>
    </Container>
  );
};

export default Match;
