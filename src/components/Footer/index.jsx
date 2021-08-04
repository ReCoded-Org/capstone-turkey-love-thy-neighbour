// react
import React from "react";

// react-bootstrap
import { Container, Nav } from "react-bootstrap";

// react-router-dom
import { Link } from "react-router-dom";

// icons
import InstagramLogo from "../../utils/instagram.svg";
import TwitterLogo from "../../utils/twitter.svg";
import FacebookLogo from "../../utils/facebook.svg";

import "./index.scss";

function Footer() {
  return (
    <Container fluid className="footer-container-fluid">
      <Container
        xs={12}
        sm={12}
        className="footer-container d-flex  justify-content-between align-items-center col-12 col-sm-12"
      >
        <Nav>
          <Link to="/our-team">Our Team</Link>
          <Link to="/contact-us" style={{ margin: "0 16px" }}>
            Contact Us
          </Link>
          <Link to="/faq">FAQ</Link>
        </Nav>
        <Nav style={{ fontSize: "12px" }}>Copyright © Re-coded 2021</Nav>
        <Nav>
          <img src={InstagramLogo} alt="instagram logo" />
          <img src={TwitterLogo} alt="twitter logo" />
          <img src={FacebookLogo} alt="facebook logo" />
        </Nav>
      </Container>
    </Container>
  );
}

export default Footer;
