import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listDbsUserAction } from "../../redux/action/dbsAction";
import { Form, Button, Card, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Dbs = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const listDbs = useSelector((state) => state.listDbs);
  const { dbs, error, loading } = listDbs;
  const [db, setDb] = useState("");
  useEffect(() => {
    if (db) {
      localStorage.setItem("name_db", db);
    }
  }, [db]);
  useEffect(() => {
    dispatch(listDbsUserAction());
  }, []);
  const handleMove = () => {
    navigator("/match");
  };
  return (
    <div style={{ width: "300px", margin: "auto" }}>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        style={{
          fontSize: "10px",
          fontWeight: "bold",
          marginTop: "10px",
          textAlign: "right",
        }}
      >
        <Form.Label> المباريات التي تم تسجيلها من قبل</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={db}
          style={{ fontSize: "10px" }}
          onChange={(e) => setDb(e.target.value)}
        >
          <option>اختر</option>
          {dbs?.map((x) => (
            <option value={x.name}>{x.name}</option>
          ))}
        </Form.Select>
      </Form.Group>
      {db ? (
        <Button onClick={handleMove} style={{ width: "200px" }}>
          انتقل الي صفحة المباراة
        </Button>
      ) : null}
    </div>
  );
};

export default Dbs;
