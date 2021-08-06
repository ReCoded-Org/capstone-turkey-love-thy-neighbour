// react
import React from "react";

// react-bootstrap
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

// react-router-dom
import { Link } from "react-router-dom";

// utils
import Logo from "../../utils/logo.svg";

import "./index.scss";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/users" className="nav-link">
              Users
            </Link>
            <Link to="/meet" className="nav-link">
              Meet
            </Link>
          </Nav>
          <Nav>
            {/* Add conditional rendering to show sign out when user is signed in */}
            <Nav.Link>Sign In</Nav.Link>
            {/* Handle the click to show sign in pop up */}
            <Nav.Link>Sign Up</Nav.Link>
            {/* Handle the click to show sign in pop up */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
