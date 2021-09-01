import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as LinkedIn } from "../../images/linkedIn.svg";
import { ReactComponent as Github } from "../../images/github.svg";
import imgAli from "../../images/aliriza.jpg";
import imgKutay from "../../images/kutay.jpg";
import imgMoulham from "../../images/moulham.png";
import imgNur from "../../images/nur.jpg";
import imgShrreya from "../../images/shrreya.jpeg";
import imgAziza from "../../images/aziza.jpg";

import "./index.scss";

function OurTeam() {
  return (
    <Container className="ourteam-content-container d-flex flex-column justify-content-center">
      <h2>Here’s our hard working development team</h2>

      <Row className="ourteam-content-row">
        <Card className="card d-flex flex-column align-items-center">
          <img src={imgShrreya} alt="img" className="img-fluid" />
          <Card.Title> Shrreya Bhatachaarya </Card.Title>
          <p className="short-define">Lead Trainer</p>
          <Col className="social-media-logos d-flex flex-row justify-content-center">
            {" "}
            <a
              href="https://github.com/Shrreya"
              target="_blank"
              rel="external noreferrer"
            >
              <Github />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/shrreya/"
              target="_blank"
              rel="external noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com/__shrreya__"
              target="_blank"
              rel="external noreferrer"
            >
              <Twitter />
            </a>
          </Col>
        </Card>

        <Card className="card d-flex flex-column align-items-center">
          <img src={imgAli} alt="img" className="img-fluid" />
          <Card.Title>Ali Rıza Şahin</Card.Title>
          <p>Junior Developer</p>
          <Col className="social-media-logos d-flex flex-row justify-content-center">
            {" "}
            <a
              href="https://github.com/ARS-coding"
              target="_blank"
              rel="external noreferrer"
            >
              <Github />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/ars-coding/"
              target="_blank"
              rel="external noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com/ARS_coding"
              target="_blank"
              rel="external noreferrer"
            >
              <Twitter />
            </a>
          </Col>
        </Card>

        <Card className="card d-flex flex-column align-items-center">
          <img src={imgKutay} alt="img" className="img-fluid" />
          <Card.Title>Kutay Kağan Özen</Card.Title>
          <p>Junior Developer</p>
          <Col className="social-media-logos d-flex flex-row justify-content-center">
            {" "}
            <a
              href="https://github.com/Iseluin"
              target="_blank"
              rel="external noreferrer"
            >
              <Github />
            </a>{" "}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="external noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="external noreferrer"
            >
              <Twitter />
            </a>
          </Col>
        </Card>

        <Card className="card d-flex flex-column align-items-center">
          <img src={imgMoulham} alt="img" className="img-fluid" />
          <Card.Title>Moulham Hallak</Card.Title>
          <p>Junior Developer</p>
          <Col className="social-media-logos d-flex flex-row justify-content-center">
            {" "}
            <a
              href="https://github.com/MoulhamHallak"
              target="_blank"
              rel="external noreferrer"
            >
              <Github />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/mahmoud-moulham-hallak-a2a688147/"
              target="_blank"
              rel="external noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com/Moulham990"
              target="_blank"
              rel="external noreferrer"
            >
              <Twitter />
            </a>
          </Col>
        </Card>

        <Card className="card d-flex flex-column align-items-center">
          <img src={imgAziza} alt="img" className="img-fluid" />
          <Card.Title>Aziza Iliasova </Card.Title>
          <p>Junior Developer</p>
          <Col className="social-media-logos d-flex flex-row justify-content-center">
            {" "}
            <a
              href="https://github.com/mimisha25"
              target="_blank"
              rel="external noreferrer"
            >
              <Github />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/mia-l-10b9a81b1/"
              target="_blank"
              rel="external noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="external noreferrer"
            >
              <Twitter />
            </a>
          </Col>
        </Card>

        <Card className="card d-flex flex-column align-items-center">
          <img src={imgNur} alt="img" className="img-fluid" />
          <Card.Title>Nur Hafise Bacaksiz </Card.Title>
          <p>Junior Developer</p>
          <Col className="social-media-logos d-flex flex-row justify-content-center">
            {" "}
            <a
              href="https://github.com/nurbacaksiz"
              target="_blank"
              rel="external noreferrer"
            >
              <Github />
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/h-nur-bacaks%C4%B1z-b352b2182"
              target="_blank"
              rel="external noreferrer"
            >
              <LinkedIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="external noreferrer"
            >
              <Twitter />
            </a>
          </Col>
        </Card>
      </Row>
    </Container>
  );
}

export default OurTeam;
