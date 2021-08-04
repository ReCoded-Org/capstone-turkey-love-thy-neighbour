// react
import React from "react";

// react-bootstrap
import { Container, Row, Col } from "react-bootstrap";

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
      <Container>
        <Row className="footer-container d-flex  justify-content-between align-items-center">
          <Col xs={12} sm={12} md={4}>
            <Link to="/our-team" className="ms-sm-auto ms-xs-auto">
              Our Team
            </Link>
            <Link to="/contact-us" style={{ margin: "0 16px" }}>
              Contact Us
            </Link>
            <Link to="/faq">FAQ</Link>
          </Col>
          <Col xs={12} sm={12} md={4} style={{ fontSize: "12px" }}>
            Copyright © Re-coded 2021
          </Col>
          <Col xs={12} sm={12} md={4}>
            <img src={InstagramLogo} alt="instagram logo" />
            <img src={TwitterLogo} alt="twitter logo" />
            <img src={FacebookLogo} alt="facebook logo" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
