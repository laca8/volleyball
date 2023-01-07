import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";

import axios from "axios";
const TableMatch = ({ data }) => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        let name_db = localStorage.getItem("name_db")
          ? localStorage.getItem("name_db")
          : null;
        const res = await axios.get(`/api/match/${name_db}`);
        console.log(res);
        setResult(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [data]);
  return (
    <div
      className="div-tableMatch"
      style={{
        maxHeight: "80px",
        overflowY: "scroll",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <table
        striped
        bordered
        hover
        style={{
          width: "40%",
          margin: "5px",
          fontSize: "10px",
        }}
      >
        <thead>
          <tr>
            <th>الفريق</th>
            <th>رقم اللاعب</th>
            <th>نوع المهارة</th>

            <th>نتيجة اللعبة</th>

            <th>مكان البداية</th>
            <th>مكان النهاية</th>
            <th>النقاط</th>
          </tr>
        </thead>
        <tbody style={{ border: "1px solid #333", textAlign: "center" }}>
          {result &&
            result?.map((d) => (
              <tr>
                <td>{d.ball}</td>
                <td>{d.num}</td>
                <td>{d.skill}</td>

                <td>{d.result}</td>

                <td>{d.from}</td>
                <td>{d.to}</td>
                <td>{d.point}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMatch;
