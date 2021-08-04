// react
import React from "react";

// react-bootstrap
import { Container, Nav } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#users">Users</Nav.Link>
            <Nav.Link href="#meet">Meet</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <Nav.Link href="#signup"> Sign Up </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
