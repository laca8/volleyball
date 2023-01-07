import React, { useState, useEffect } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { Container, Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addPlayerAction,
  listPlayersAction,
} from "../../redux/action/playersAction";
import Loader from "../../components/features/Loader";
import Error from "../../components/features/Error";
const AddPlayer = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [club, setClub] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const listPlayers = useSelector((state) => state.listPlayers);
  const { players, loading, error } = listPlayers;
  const addPlayer = useSelector((state) => state.addPlayer);
  const { player, error: errorAdd } = addPlayer;
  const columnsDefs = [
    { key: "name", name: "Name" },
    { key: "club", name: "Club" },
    { key: "number", name: "Number" },
    { key: "position", name: "Position" },
  ];

  useEffect(() => {
    dispatch(listPlayersAction());
  }, [player]);
  const handleSubmit = () => {
    dispatch(addPlayerAction(name, club, number, position));
    alert("player added successed");
  };
  return (
    <Container>
      <Button
        style={{ marginTop: "15px", marginBottom: "15px" }}
        onClick={handleShow}
      >
        Add Player
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : players ? (
        <DataGrid
          columns={columnsDefs}
          rows={players}
          style={{
            width: "100%",
            maxHeight: "100%",
            overflowY: "scroll",
            // fontSize: "10px",
          }}
        />
      ) : null}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorAdd && <Error error={error} />}
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Club</Form.Label>
              <Form.Control
                type="text"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Club"
                value={club}
                onChange={(e) => setClub(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddPlayer;
