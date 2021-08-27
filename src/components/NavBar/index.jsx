import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebaseConfig";

import logo from "../../images/logo.svg";
import "./index.scss";

// fix the link profile

function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  const uid = useSelector((state) => state.user.authCred?.uid);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isSignedIn && (
              <>
                <Link to={`/profile/${uid}`} className="nav-link">
                  Profile
                </Link>
                <Link to="/neighbors" className="nav-link">
                  Neighbors
                </Link>
                <Link to="/meet" className="nav-link">
                  Meet
                </Link>
              </>
            )}
          </Nav>
          <Nav>
            {isSignedIn ? (
              <Nav.Link
                onClick={() => {
                  auth.signOut().then(() => history.push("/"));
                  // TODO: Show the error within a modal
                }}
              >
                Sign Out
              </Nav.Link>
            ) : (
              <>
                <Nav.Link onClick={() => dispatch({ type: "signIn" })}>
                  Sign In
                </Nav.Link>
                <Nav.Link onClick={() => dispatch({ type: "signUp" })}>
                  Sign Up
                </Nav.Link>{" "}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
