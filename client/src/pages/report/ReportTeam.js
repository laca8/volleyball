import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import { Container, Form, Table } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import ChartPie from "../../components/chart/team/ChartPie";
import ChartBarRes from "../../components/chart/team/ChartBarRes";
import ChartBarSkill from "../../components/chart/team/ChartBarSkill";
import ChartPieSkill from "../../components/chart/team/ChartPieSkill";
const ReportTeam = ({ allResults, allSkills, colors }) => {
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

export default ReportTeam;
