import React, { useEffect, useState } from "react";
import { Form, Button, Card, Table } from "react-bootstrap";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { containerClasses } from "@mui/system";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const teams = ["الاهلي", "الزمالك", "طلائع الجيش", "الانتاج الحربي"];
const ListPlayers = ({
  index,
  color,
  players,
  team,
  player,
  setPlayer,
  setPlayers,
  nums,
  setTeam,
}) => {
  const [checked, setChecked] = React.useState([]);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [u, setU] = useState({});
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const arr = [
    {
      club: "الاهلى",
      name: "احمد عبد العال",
      number: 1,
      position: "مهاجم",
    },
    {
      club: "الاهلى",
      name: "احمد عادل",
      number: 2,
      position: "مهاجم",
    },
    {
      club: "الاهلى",
      name: "محمد مصطفى",
      number: 3,
      position: "مهاجم",
    },
    {
      club: "الاهلى",
      name: "عادل شاهين",
      number: 4,
      position: "مهاجم",
    },
    {
      club: "الاهلى",
      name: "لويجى",
      number: 5,
      position: "مهاجم",
    },
    {
      club: "الاهلى",
      name: "اوسكار",
      number: 6,
      position: "مهاجم",
    },
    {
      club: "الاهلى",
      name: "مجدى محمد",
      number: 7,
      position: "حر",
    },
    {
      club: "الاهلى",
      name: "ياسر حسين",
      number: 8,
      position: "حر",
    },
    {
      club: "الاهلى",
      name: "شريف عاطف",
      number: 9,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "فادى منصور",
      number: 10,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "كريم ماجد",
      number: 11,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "يونس احمد",
      number: 12,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "ياسر شاهين",
      number: 13,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "طارق محمود",
      number: 14,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "علاء محمود",
      number: 15,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "ايمن الشواربى",
      number: 16,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "ماجد هانى",
      number: 17,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "مالك زين",
      number: 18,
      position: "دفاع",
    },
    {
      club: "الاهلى",
      name: "على مجدى",
      number: 30,
      position: "دفاع",
    },
    {
      club: "الزمالك",
      name: "عبد الحميد محمد",
      number: 55,
      position: "مهاجم",
    },
  ];

  const handleChange = (evt) => {
    const value = evt.target.value;
    setPlayer({
      ...player,
      [evt.target.name]: value,
    });
  };
  const handleSubmit = () => {
    //console.log(player);

    if (players.length >= 12) {
      alert("لا يمكنك اضافة لاعبين اخرين");
    } else if (player.num == "" || player.num == null) {
      alert("ادخل رقم اللاعب");
    } else if (player.name == "" || player.name == null) {
      alert("ادخل اسم اللاعب");
    } else {
      setPlayers((players) => [...players, player]);
    }
    console.log(players);
  };
  useEffect(() => {
    if (players.length >= 12) {
      alert("لا يمكنك اضافة لاعبين اخرين");
    } else if (num) {
      allData
        .filter((x) => x.club == team)
        .map((x) => {
          if (x["name"] == num) {
            const existItem = players.find((x) => x["name"] == num);
            if (existItem) {
              alert("هذا اللاعب سبق دخوله القائمة");
            } else {
              setPlayers((players) => [
                ...players,
                {
                  club: x.club,
                  name: x.name,
                  number: x.number,
                  position: x.position,
                },
              ]);
              console.log(players);
            }
          }
        });
    }
  }, [num]);
  const handleRemove = (index) => {
    console.log(index);
    setPlayers((players) => players.filter((item, i) => i !== index));
    console.log(players);
  };
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/api/teams");
      console.log(res);
      setData([...new Map(res.data.map((m) => [m.club, m])).values()]);
      setAllData(res.data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "inline-block",
        width: "30%",
        margin: "0 20px",
        border: `1px solid ${color}`,
        padding: "5px",
        color: color,
        textAlign: "right",
        fontSize: "10px",
        fontWeight: "bold",
      }}
    >
      <div>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          style={{ fontSize: "10px", height: "28px", display: "flex" }}
        >
          <Form.Select
            aria-label="Default select example"
            value={team}
            style={{ fontSize: "10px", fontWeight: "bold" }}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option>اختر</option>
            {data.map((x) => (
              <option value={x.club}>{x.club}</option>
            ))}
          </Form.Select>
          <Form.Label> الفريق {index}</Form.Label>
        </Form.Group>
      </div>
      <div>
        {team ? (
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ fontSize: "10px", height: "28px", display: "flex" }}
          >
            <Form.Select
              aria-label="Default select example"
              name="num"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              style={{ fontSize: "10px", fontWeight: "bold" }}
            >
              <option>اختر</option>
              {allData
                .filter((x) => x.club == team)
                .map((x) => (
                  <option value={x["name"]}>{x["name"]}</option>
                ))}
            </Form.Select>
            <Form.Label>رقم اللاعب</Form.Label>
          </Form.Group>
        ) : null}
      </div>

      <div style={{ marginTop: "5px", fontSize: "10px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>حذف</th>
              <th>الاسم</th>
              <th>الرقم</th>
            </tr>
          </thead>
          <tbody>
            {players?.map((p, i) => (
              <tr style={{ fontSize: "8px", fontWeight: "bold" }}>
                <td>
                  <Button
                    variant="danger"
                    style={{ fontSize: "2px" }}
                    onClick={() => handleRemove(i)}
                  >
                    حذف
                  </Button>
                </td>
                <td style={{ fontWeight: "bold" }}>{p?.name}</td>
                <td style={{ fontWeight: "bold" }}>{p["number"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListPlayers;
