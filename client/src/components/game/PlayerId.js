import React, { useState, useEffect, createRef, useRef } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import ListPlayers from "../players/ListPlayers";
const PlayerId = ({ p, ps, setPs, index, setChanges, changes }) => {
  const [num, setNum] = useState(p.number);
  const [position, setPosition] = useState(p.position);
  const [id, setId] = useState("");
  const handleSubmit = () => {
    const player = {
      position,
      num,
      id,
    };
    console.log(player);
    const existItem = ps.find((x) => x.id == player.id);
    const existItem2 = ps.find((x) => x.num == player.num);
    const existItem3 = ps.find(
      (x) => x.position == "Libero" && player.position == "Libero"
    );

    console.log(existItem);
    if (player.position == "Libero" && player.id == "2") {
      alert("يجب تغيير الليبرو");
    } else if (player.position == "Libero" && player.id == "3") {
      alert("يجب تغيير الليبرو");
    } else if (player.position == "Libero" && player.id == "4") {
      alert("يجب تغيير الليبرو");
    } else {
      if (existItem && existItem3) {
        alert("يوجد لاعب ليبرو في التشكيل");
      } else if (existItem && !existItem3) {
        ps.splice(existItem, 1);
        setChanges((changes) => [
          ...changes,
          { inn: player.num, out: existItem.num },
        ]);
        //   newPlayers1?.splice(existItem, 1);
        setPs((players) => [...players, player]);
        //   setNewPlayers1((players) => [...players, player]);
      } else if (existItem2) {
        alert("اللاعب موجود بالفعل");
      } else if (existItem3) {
        alert("يوجد لاعب ليبرو في التشكيل");
      } else {
        setPs((players) => [...players, player]);
      }
    }

    setId("");
    console.log(ps);
  };
  const autoFocus = () => {
    let allFields = document.querySelectorAll(".input-form");
    // console.log(allFields);
    for (let i = 0; i < allFields.length; i++) {
      allFields[i].addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
          console.log("Enter clicked");
          allFields[++i].focus();
        }
      });
    }
  };
  const handleKey = (e) => {
    if (e.key == "Enter") {
      autoFocus();
      handleSubmit();
    }
  };

  return (
    <>
      <tr style={{ fontSize: "10px", height: "2px" }}>
        <td style={{ fontWeight: "bold" }}>{p.name}</td>
        <td>
          <input
            type="text"
            value={num}
            disabled
            style={{
              width: "15%",
              fontSize: "10px",
            }}
            onChange={(e) => setNum(e.target.value)}
          />

          <input
            type="text"
            value={position}
            disabled
            style={{
              width: "40%",
              fontSize: "10px",
            }}
            onChange={(e) => setPosition(e.target.value)}
          />

          <input
            type="text"
            className="input-form"
            id={index}
            name="id"
            //autoFocus={handleKey}
            onKeyDown={handleKey}
            style={{
              width: "20%",
              fontSize: "10px",
            }}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </td>
      </tr>
    </>
  );
};

export default PlayerId;
