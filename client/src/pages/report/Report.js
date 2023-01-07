import axios from "axios";
import React, { useState, useEffect, useRef, Component } from "react";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import { Button } from "react-bootstrap";
import { Container, Form, Table } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import ReactPrint from "../../components/outside/ReactPrint";
import ReportPlayer from "./ReportPlayer";
import ReportTeam from "./ReportTeam";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);

const Report = () => {
  const componentRef = useRef();
  const [data, setData] = useState([]);
  const [team, setTeam] = useState("");
  const [player, setPlayer] = useState("");
  const [skill, setSkill] = useState("");
  const [dataFilt, setDataFilt] = useState([]);
  const [load, setLoad] = useState(false);
  const [resE, setResE] = useState(Number(0));
  const [resT, setResT] = useState(Number(0));
  const [resO, setResO] = useState(Number(0));
  const [resV, setResV] = useState(Number(0));
  const [skillS, setSkillS] = useState(Number(0));
  const [skillB, setSkillB] = useState(Number(0));
  const [skillP, setSkillP] = useState(Number(0));
  const [skillA, setSkillA] = useState(Number(0));
  const [skillR, setSkillR] = useState(Number(0));
  const [skillD, setSkillD] = useState(Number(0));
  const [dataPlayer, setDataPlayer] = useState([]);
  const colors = ["#007acc", "red", "#ffcc00", "#ff8000"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let name_db = localStorage.getItem("name_db")
          ? localStorage.getItem("name_db")
          : null;
        setLoad(true);
        const res = await axios.get(`/api/match/${name_db}`);
        console.log(res);
        if (team !== "") {
          setData(res?.data?.filter((x) => x.ball == team));
          console.log(data);
          setLoad(false);
        } else {
          setData(res?.data[0]?.score);
        }
      } catch (err) {
        console.log(err);
        setLoad(false);
      }
    };
    fetchData();
  }, [team]);

  useEffect(() => {
    setResE(data?.filter((x) => x.result == "E")?.length);
    setResT(data?.filter((x) => x.result == "T")?.length);
    setResO(data?.filter((x) => x.result == "O")?.length);
    setResV(data?.filter((x) => x.result == "V")?.length);
    setSkillA(data?.filter((x) => x.skill == "A")?.length);
    setSkillS(data?.filter((x) => x.skill == "S")?.length);
    setSkillR(data?.filter((x) => x.skill == "R")?.length);
    setSkillB(data?.filter((x) => x.skill == "B")?.length);
    setSkillP(data?.filter((x) => x.skill == "P")?.length);
    setSkillD(data?.filter((x) => x.skill == "D")?.length);
  }, [data, team]);
  useEffect(() => {
    setDataPlayer(data?.filter((x) => x.ball == team && x.num == player));
    setDataFilt(
      data?.filter((x) => x.ball == team && x.num == player && x.skill == skill)
    );
    console.log(
      data?.filter(
        (x, i) =>
          data.findLastIndex((y) => y.num == x.num && y.ball == x.ball) == i
      )
    );
  }, [data, team, player, skill]);

  const allResults = [resT, resE, resO, resV];
  const allSkills = [skillA, skillB, skillD, skillP, skillR, skillS];
  const titles = ["T", "E", "O", "V"];
  const labels = titles.map((el) => {
    return el;
  });

  const teams = ["H", "G"];

  return (
    <Container>
      <div
        style={{
          width: "600px",
          margin: "auto",
          marginTop: "15px",
          marginBottom: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Form.Group>
          <Form.Label>Team</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={team}
            style={{ marginRight: "10px" }}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option>select</option>
            {teams.map((t) => (
              <option value={t}>{t}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Player Number</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={player}
            style={{ marginRight: "10px" }}
            onChange={(e) => setPlayer(e.target.value)}
            disabled={team == ""}
          >
            <option>select</option>
            {data
              ?.filter(
                (x, i) =>
                  data.findLastIndex(
                    (y) => y.num == x.num && y.ball == x.ball
                  ) == i
              )
              ?.map((t) => (
                <option value={t.num}>{t.num}</option>
              ))}
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Skills</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={skill}
            style={{ marginRight: "10px" }}
            onChange={(e) => setSkill(e.target.value)}
            disabled={team == "" || player == ""}
          >
            <option>select</option>
            {data
              ?.filter(
                (x, i) => data.findLastIndex((y) => y.skill == x.skill) == i
              )
              ?.map((t) => (
                <option value={t.skill}>{t.skill}</option>
              ))}
          </Form.Select>
        </Form.Group>

        <Button
          onClick={() => window.print()}
          variant="secondary"
          style={{ height: "40px", marginTop: "25px" }}
        >
          print
        </Button>
      </div>
      <div ref={componentRef}>
        {load ? (
          <p>loading...</p>
        ) : data && team && player == "" ? (
          <>
            <ReportTeam
              allResults={allResults}
              allSkills={allSkills}
              colors={colors}
              componentRef={componentRef}
            />
          </>
        ) : data && team && player !== "" ? (
          <ReportPlayer
            dataPlayer={dataPlayer}
            colors={colors}
            dataFilt={dataFilt}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default Report;
