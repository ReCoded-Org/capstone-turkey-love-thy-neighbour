import React from "react";

import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import TwitterLogo from "../../images/twitter-logo.svg";
import InstagramLogo from "../../images/instagram-logo.svg";
import FacebookLogo from "../../images/facebook-logo.svg";

import "./index.scss";

function Footer() {
  return (
    <footer className="footer container-fluid">
      <Container>
        <Row className="footer-content-row w-100 h-100">
          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex justify-content-center justify-content-sm-center justify-content-md-start align-items-center"
          >
            <Link to="our-team">Our Team</Link>
            <Link to="contact-us" className="mx-3">
              Contact Us
            </Link>
            <Link to="faq">FAQ</Link>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex justify-content-center align-items-center my-2 my-sm-2 my-sm-0"
          >
            <p>Copyright © Re-coded 2021</p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={4}
            className="d-flex justify-content-center justify-content-sm-center justify-content-md-end align-items-center"
          >
            <a href="#x">
              <img src={TwitterLogo} alt="twitter logo" />
            </a>
            <a href="#x">
              <img src={InstagramLogo} alt="instagram logo" />
            </a>
            <a href="#x">
              <img src={FacebookLogo} alt="facebook logo" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
