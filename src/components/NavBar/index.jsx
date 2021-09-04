import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

import { Container, Nav, Navbar } from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";

import { auth } from "../../firebaseConfig";

import { ReactComponent as Logo } from "../../images/logoGrayBg.svg";
import NotificationsMenu from "../NotificationsMenu";
import LanguageMenu from "../LanguageMenu";

import "./index.scss";

function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state) => state.user.isSignedIn);
  const uid = useSelector((state) => state.user.authCred?.uid);

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("EN");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <Logo className="logo-svg" />
        </Link>
        {isSignedIn && (
          <div className="d-flex order-lg-last">
            <NotificationsMenu />
            <LanguageMenu language={language} setLanguage={setLanguage} />
          </div>
        )}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="order-lg-3" id="responsive-navbar-nav">
          {isSignedIn && (
            <Nav className="me-auto">
              <Link to={`/profile/${uid}`} className="nav-link">
                {t("navbar_profile")}
              </Link>
              <Link to="/meet" className="nav-link">
                {t("navbar_meet")}
              </Link>
              <Link to="/neighbors" className="nav-link">
                {t("navbar_neighbors")}
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
                {t("navbar_signout")}
              </Nav.Link>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link onClick={() => dispatch({ type: "signIn" })}>
                {t("navbar_sign_in")}
              </Nav.Link>
              <Nav.Link onClick={() => dispatch({ type: "signUp" })}>
                {t("navbar_sign_up")}
              </Nav.Link>{" "}
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
