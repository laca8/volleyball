import React, { useState, useEffect } from "react";

import { Bar, Line, Pie } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import { Container, Form, Table } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import ChartBarSkill from "../../components/chart/player/ChartBarSkill";
import ChartPieSkill from "../../components/chart/player/ChartPieSkill";
import ChartPie from "../../components/chart/player/ChartPie";
import ChartBarRes from "../../components/chart/player/ChartBarRes";
import ChartBarFilter from "../../components/chart/player/ChartBarFilter";
const ReportPlayer = ({ dataPlayer, colors, dataFilt }) => {
  const [resE, setResE] = useState(Number(0));
  const [resT, setResT] = useState(Number(0));
  const [resO, setResO] = useState(Number(0));
  const [resV, setResV] = useState(Number(0));
  const [resPE, setResPE] = useState(Number(0));
  const [resPT, setResPT] = useState(Number(0));
  const [resPO, setResPO] = useState(Number(0));
  const [resPV, setResPV] = useState(Number(0));
  const [skillS, setSkillS] = useState(Number(0));
  const [skillB, setSkillB] = useState(Number(0));
  const [skillP, setSkillP] = useState(Number(0));
  const [skillA, setSkillA] = useState(Number(0));
  const [skillR, setSkillR] = useState(Number(0));
  const [skillD, setSkillD] = useState(Number(0));

  useEffect(() => {
    setResE(dataPlayer?.filter((x) => x.result == "E")?.length);
    setResT(dataPlayer?.filter((x) => x.result == "T")?.length);
    setResO(dataPlayer?.filter((x) => x.result == "O")?.length);
    setResV(dataPlayer?.filter((x) => x.result == "V")?.length);

    setResPE(dataFilt?.filter((x) => x.result == "E")?.length);
    setResPT(dataFilt?.filter((x) => x.result == "T")?.length);
    setResPO(dataFilt?.filter((x) => x.result == "O")?.length);
    setResPV(dataFilt?.filter((x) => x.result == "V")?.length);
    setSkillA(dataPlayer?.filter((x) => x.skill == "A")?.length);
    setSkillS(dataPlayer?.filter((x) => x.skill == "S")?.length);
    setSkillR(dataPlayer?.filter((x) => x.skill == "R")?.length);
    setSkillB(dataPlayer?.filter((x) => x.skill == "B")?.length);
    setSkillP(dataPlayer?.filter((x) => x.skill == "P")?.length);
    setSkillD(dataPlayer?.filter((x) => x.skill == "D")?.length);
  }, [dataPlayer]);
  const allResults = [resT, resE, resO, resV];
  const allResultsPlayer = [resPT, resPE, resPO, resPV];
  const allSkills = [skillA, skillB, skillD, skillP, skillR, skillS];
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "50%", marginRight: "10px" }}>
          <Typography style={{ textAlign: "right" }}>نتائج اللعبة</Typography>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>T</th>
                <th>E</th>
                <th>O</th>
                <th>V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{allResults && allResults[0]}</td>
                <td>{allResults && allResults[1]}</td>
                <td>{allResults && allResults[2]}</td>
                <td>{allResults && allResults[3]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div style={{ width: "50%" }}>
          <Typography style={{ textAlign: "right" }}>انواع اللعبة</Typography>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>A</th>
                <th>B</th>
                <th>D</th>
                <th>P</th>
                <th>R</th>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{allSkills && allSkills[0]}</td>
                <td>{allSkills && allSkills[1]}</td>
                <td>{allSkills && allSkills[2]}</td>
                <td>{allSkills && allSkills[3]}</td>
                <td>{allSkills && allSkills[4]}</td>
                <td>{allSkills && allSkills[5]}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Bar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ChartBarRes allResults={allResults} colors={colors} />
            <ChartBarSkill allSkills={allSkills} colors={colors} />
          </div>
          <div style={{ width: "50%", margin: "15px auto" }}>
            <ChartBarFilter
              allResultsPlayer={allResultsPlayer}
              colors={colors}
            />
          </div>
        </Tab>
        <Tab eventKey="contact" title="Pie">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <ChartPie allResults={allResults} colors={colors} />
            <ChartPieSkill allSkills={allSkills} colors={colors} />
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default ReportPlayer;
