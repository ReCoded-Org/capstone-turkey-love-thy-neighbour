import React from "react";

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebaseConfig";

import logo from "../../images/logo.svg";

import "./index.scss";

function NavBar() {
  const { t } = useTranslation();
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
                  {t("navbar_profile")}
                </Link>
                <Link to="/meet" className="nav-link">
                  {t("navbar_meet")}
                </Link>
                <Link to="/neighbors" className="nav-link">
                  {t("navbar_neighbors")}
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
                {t("navbar_signout")}
              </Nav.Link>
            ) : (
              <>
                <Nav.Link onClick={() => dispatch({ type: "signIn" })}>
                  {t("navbar_sign_in")}
                </Nav.Link>
                <Nav.Link onClick={() => dispatch({ type: "signUp" })}>
                  {t("navbar_sign_up")}
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
