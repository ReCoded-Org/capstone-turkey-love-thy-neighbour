import React from "react";

import { useDispatch } from "react-redux";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";
import "./index.scss";

function NavBar({ handleClickSignIn, handleClickSignUp }) {
  const dispatch = useDispatch();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* TODO: Conditionally render links below */}
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/neighbors" className="nav-link">
              Neighbors
            </Link>
            <Link to="/meet" className="nav-link">
              Meet
            </Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => dispatch({ type: "signIn" })}>
              Sign In
            </Nav.Link>
            {/* TODO: Handle the click to show sign in pop up */}
            <Nav.Link onClick={() => dispatch({ type: "signUp" })}>
              Sign Up
            </Nav.Link>
            {/* TODO: Handle the click to show sign in pop up */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
