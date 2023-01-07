import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
const H1 = ({ show, handleClose, moves, num }) => {
  // console.log(moves);
  const [m, setM] = useState([]);

  const [arr, setArr] = useState([]);
  const [arr1, setArr1] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let name_db = localStorage.getItem("name_db")
          ? localStorage.getItem("name_db")
          : null;
        const res = await axios.get(`/api/match/${name_db}`);
        //console.log(res);
        setM(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [num, moves]);
  useEffect(() => {
    const allFields = document.querySelectorAll(".input");
    var c = document.getElementById("myCanvas");
    const allFields2 = document.querySelectorAll(".input2");
    var line = document.createElement("line");

    for (let i = 0; i < allFields.length; i++) {
      //console.log(allFields[i].value);
      for (let j = 0; j < allFields2.length; j++) {
        m?.filter((x) => x.ball == "H" && x.skill == "A" && x.num == num)?.map(
          (x) => {
            if (allFields2[j].value == x.from && allFields[i].value == x.to) {
              //var ctx = c.getContext("2d");
              //console.log(allFields2[j].offsetLeft, allFields2[j].offsetTop);
              // console.log(allFields[i].offsetLeft, allFields[i].offsetTop);
              const data = {
                num: x.num,
                x1: allFields[i].offsetLeft,
                x2: allFields2[j].offsetLeft,
                y1: allFields[i].offsetTop,
                y2: allFields2[j].offsetTop,
              };
              // console.log(data);
              setArr((prev) => [...prev, data]);

              //console.log(arr.filter((x, i) =>arr.findLastIndex((y) =>y.x1 == x.x1 &&y.x2 == x.x2 &&y.y1 == x.y1 &&y.y2 == x.y2) == i ));
              //  line.setAttribute("x1", allFields[i].offsetLeft);
              // line.setAttribute("x2", allFields2[j].offsetLeft);
              // line.setAttribute("y1", allFields[i].offsetTop);
              // line.setAttribute("y2", allFields2[j].offsetTop);
              //  c.appendChild(line);
              // console.log(arr);
              //setX1(allFields[i].offsetLeft);
              //  setY1(allFields[i].offsetTop);
              //  setX2(allFields2[j].offsetLeft);
              // setY2(allFields2[j].offsetTop);
            }
          }
        );
      }
    }
  }, [moves, num, m]);
  useEffect(() => {
    const allFields = document.querySelectorAll(".input11");
    var c = document.getElementById("myCanvas1");
    const allFields2 = document.querySelectorAll(".input22");
    var line = document.createElement("line");

    for (let i = 0; i < allFields.length; i++) {
      //console.log(allFields[i].value);
      for (let j = 0; j < allFields2.length; j++) {
        m?.filter((x) => x.ball == "H" && x.skill == "S" && x.num == num)?.map(
          (x) => {
            if (allFields2[j].value == x.from && allFields[i].value == x.to) {
              //var ctx = c.getContext("2d");
              //console.log(allFields2[j].offsetLeft, allFields2[j].offsetTop);
              // console.log(allFields[i].offsetLeft, allFields[i].offsetTop);
              const data = {
                num: x.num,
                x1: allFields[i].offsetLeft,
                x2: allFields2[j].offsetLeft,
                y1: allFields[i].offsetTop,
                y2: allFields2[j].offsetTop,
              };
              // console.log(data);
              setArr1((prev) => [...prev, data]);
            }
          }
        );
      }
    }
  }, [moves, num, m, arr]);
  return (
    <div style={{}}>
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          fontSize: "10px",
          background: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ width: "240px" }}>
            <Modal.Header>
              <Modal.Title style={{ fontSize: "20px" }}>
                {" "}
                الضرب للاعب رقم {num}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ backgroundColor: "orange", position: "relative" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <svg
                  id="myCanvas"
                  style={{
                    position: "absolute",
                    zIndex: "1000",
                    color: "red",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {arr
                    ?.filter((x) => x.num == num)
                    .map((x) => (
                      <line
                        x2={x.x2}
                        y2={x.y2}
                        x1={x.x1}
                        y1={x.y1}
                        style={{ stroke: "rgb(255,0,0)", strokeWidth: "2" }}
                      />
                    ))}
                </svg>
                <input
                  className="input"
                  value={"1A"}
                  style={{ width: "20px" }}
                  disabled
                />
                <span>
                  <input
                    className="input"
                    value={"1D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"6A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"6D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"5A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"5D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input"
                    value={"1B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input"
                    value={"1C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"6B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"6C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"5B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"5C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input"
                    value={"7A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input"
                    value={"7D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"8A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"8D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"9A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"9D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input"
                    value={"7B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input"
                    value={"7C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"8B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"8C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"9B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"9C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <hr style={{ color: "#fff", border: "3px solid #fff" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input"
                    value={"2A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input"
                    value={"2D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"3A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"3D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"4A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"4D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input"
                    value={"2B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input"
                    value={"2C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"3B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"3C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input"
                    value={"4B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input"
                    value={"4C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <hr style={{ color: "blue", border: "3px solid blue" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"4C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"4B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"3C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"3B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"2C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"2B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input2"
                    value={"4D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input2"
                    value={"4A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"3D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"3A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"2D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"2A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <hr style={{ color: "#fff", border: "3px solid #fff" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input2"
                    value={"9C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input2"
                    value={"9B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"8C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"8B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"7C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"7B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input2"
                    value={"9D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input2"
                    value={"9A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"8A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"8A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"7D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"7A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input2"
                    value={"5C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input2"
                    value={"5B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"6C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"6B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"1C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"1B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input2"
                    value={"5D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input2"
                    value={"5A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"6D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"6A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input2"
                    value={"1D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input2"
                    value={"1A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
            </Modal.Body>
            <div style={{ maxHeight: "150px", overflowY: "scroll" }}>
              {m
                ?.filter((x) => x.ball == "H" && x.num == num && x.skill == "A")
                ?.map((x) => (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{x.from}</span>

                    <span
                      style={{
                        backgroundColor: "red",
                        height: "5px",
                        width: "80%",
                        marginTop: "5px",
                      }}
                    ></span>

                    <span>{x.to}</span>
                  </div>
                ))}
            </div>
          </div>
          <div style={{ width: "240px" }}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "20px" }}>
                {" "}
                الارسال للاعب رقم {num}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{ backgroundColor: "orange", position: "relative" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <svg
                  id="myCanvas1"
                  style={{
                    position: "absolute",
                    zIndex: "1000",
                    color: "red",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {arr1
                    ?.filter((x) => x.num == num)
                    .map((x) => (
                      <line
                        x2={x.x2}
                        y2={x.y2}
                        x1={x.x1}
                        y1={x.y1}
                        style={{ stroke: "rgb(255,0,0)", strokeWidth: "2" }}
                      />
                    ))}
                </svg>
                <input
                  className="input11"
                  value={"1A"}
                  style={{ width: "20px" }}
                  disabled
                />
                <span>
                  <input
                    className="input11"
                    value={"1D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"6A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"6D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"5A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"5D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input11"
                    value={"1B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input11"
                    value={"1C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"6B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"6C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"5B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"5C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input11"
                    value={"7A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input11"
                    value={"7D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"8A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"8D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"9A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"9D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input11"
                    value={"7B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input11"
                    value={"7C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"8B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"8C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"9B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"9C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <hr style={{ color: "#fff", border: "3px solid #fff" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input11"
                    value={"2A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input11"
                    value={"2D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"3A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"3D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"4A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"4D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input11"
                    value={"2B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input11"
                    value={"2C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"3B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"3C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input11"
                    value={"4B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input11"
                    value={"4C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <hr style={{ color: "blue", border: "3px solid blue" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"4C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"4B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"3C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"3B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"2C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"2B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"4D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"4A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"3D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"3A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"2D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"2A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <hr style={{ color: "#fff", border: "3px solid #fff" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"9C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"9B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"8C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"8B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"7C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"7B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"9D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"9A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"8A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"8A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"7D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"7A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"5C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"5B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"6C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"6B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"1C"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"1B"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <span>
                  <input
                    className="input22"
                    value={"5D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
                <span>
                  <input
                    className="input22"
                    value={"5A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"6D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"6A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                  <input
                    className="input22"
                    value={"1D"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>

                <span>
                  <input
                    className="input22"
                    value={"1A"}
                    style={{ width: "20px" }}
                    disabled
                  />
                </span>
              </div>
            </Modal.Body>
            <div>
              {m
                ?.filter((x) => x.ball == "H" && x.num == num && x.skill == "S")
                ?.map((x) => (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{x.from}</span>

                    <span
                      style={{
                        backgroundColor: "red",
                        height: "5px",
                        width: "80%",
                        marginTop: "5px",
                      }}
                    ></span>

                    <span>{x.to}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default H1;
