import React, { useState, useEffect } from "react";
import "react-data-grid/lib/styles.css";
import DataGrid from "react-data-grid";
import { Container, Form, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUsersAction, addUserAction } from "../../redux/action/userAction";
import Loader from "../../components/features/Loader";
import Error from "../../components/features/Error";
const AddUser = () => {
  const navigator = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const listUsers = useSelector((state) => state.listUsers);
  const { users, loading, error } = listUsers;
  const addUser = useSelector((state) => state.addUser);
  const { user, error: errorAdd } = addUser;
  const columnsDefs = [
    { key: "name", name: "Name" },
    { key: "email", name: "Email" },
  ];

  useEffect(() => {
    dispatch(listUsersAction());
  }, [user]);
  const handleSubmit = () => {
    dispatch(addUserAction(name, email, password));
    alert("user added done..!");
  };

  return (
    <Container>
      <Button
        style={{ marginTop: "15px", marginBottom: "15px" }}
        onClick={handleShow}
      >
        Add User
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : users ? (
        <DataGrid
          columns={columnsDefs}
          rows={users}
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
          <Modal.Title>Add User</Modal.Title>
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
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                style={{ fontWeight: "bold" }}
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                style={{ fontWeight: "bold" }}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default AddUser;
