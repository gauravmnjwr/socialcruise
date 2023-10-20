import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Navbar.css";

function NavbarComponent({ signIn, signUp }) {
  const navigate = useNavigate();
  const [userInfo, setuserInfo] = useState("");

  useEffect(() => {
    const cookie = Cookies?.get("user");
    if (cookie) {
      const user = JSON.parse(cookie);
      setuserInfo(user);
    }
  }, []);

  const logoutHandler = () => {
    Cookies.remove("user");
    window.location.reload();
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="nav-logo" src="./assets/logo-nav.png" alt="" />
              <Navbar.Brand className="m-4">
                <b>STORECODE</b>
              </Navbar.Brand>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo ? (
                <Container className="d-flex justify-content-between">
                  <LinkContainer to="/">
                    <Nav.Link>HOME</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/store">
                    <Nav.Link>STORE</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>CONTACT</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>ABOUT</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <NavDropdown title={userInfo.user.email} id="username">
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </LinkContainer>
                </Container>
              ) : (
                <Container className="d-flex justify-content-between">
                  <LinkContainer to="/">
                    <Nav.Link>HOME</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/store">
                    <Nav.Link>STORE</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>LOGIN</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>REGISTER</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>CONTACT</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/about">
                    <Nav.Link>ABOUT</Nav.Link>
                  </LinkContainer>
                  \{" "}
                </Container>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarComponent;
