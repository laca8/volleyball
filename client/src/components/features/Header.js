import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error, loading } = userLogin;
  const logoutHandler = () => {
    dispatch(logout());
    navigator("/login");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">VollyBall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {userInfo?.user?.isAdmin == false ? (
              <>
                <Nav.Link href="/">Add</Nav.Link>
                <Nav.Link href="/match">Match</Nav.Link>
                <Nav.Link href="/video">Video</Nav.Link>
                <Nav.Link href="/report">Report</Nav.Link>
                <Nav.Link href="#" onClick={logoutHandler}>
                  Logout
                </Nav.Link>
              </>
            ) : userInfo?.user?.isAdmin ? (
              <>
                <Nav.Link href="/">Add</Nav.Link>
                <Nav.Link href="/match">Match</Nav.Link>
                <Nav.Link href="/video">Video</Nav.Link>
                <Nav.Link href="/report">Report</Nav.Link>
                <Nav.Link href="#" onClick={logoutHandler}>
                  Logout
                </Nav.Link>
                <Dropdown variant="Secondary">
                  <Dropdown.Toggle id="dropdown-basic" variant="Secondary">
                    admin
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/users">User</Dropdown.Item>
                    <Dropdown.Item href="/players">Players</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
