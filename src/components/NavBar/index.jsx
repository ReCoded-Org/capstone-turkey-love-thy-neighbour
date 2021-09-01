import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebaseConfig";

import NotificationsMenu from "../NotificationsMenu";

import logo from "../../images/logo.svg";

import "./index.scss";

function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  const uid = useSelector((state) => state.user.authCred?.uid);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand order-lg-6">
          <img src={logo} alt="logo" />
        </Link>
        {isSignedIn && (
          <div className="d-flex order-lg-last">
            <NotificationsMenu />
          </div>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="order-lg-3" id="responsive-navbar-nav">
          {isSignedIn && (
            <Nav className="me-auto">
              <Link to={`/profile/${uid}`} className="nav-link">
                Profile
              </Link>
              <Link to="/meet" className="nav-link">
                Meet
              </Link>
              <Link to="/neighbors" className="nav-link">
                Neighbors
              </Link>
            </Nav>
          )}

          {isSignedIn ? (
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => {
                  auth.signOut().then(() => history.push("/"));
                  // TODO: Show the error within a modal
                }}
              >
                Sign Out
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link onClick={() => dispatch({ type: "signIn" })}>
                Sign In
              </Nav.Link>
              <Nav.Link onClick={() => dispatch({ type: "signUp" })}>
                Sign Up
              </Nav.Link>{" "}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
