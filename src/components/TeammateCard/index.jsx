import React from "react";

import { Col, Card } from "react-bootstrap";

import { ReactComponent as Twitter } from "../../images/twitter.svg";
import { ReactComponent as Linkedn } from "../../images/linkedn.svg";
import { ReactComponent as Github } from "../../images/github.svg";

function TeammateCard({ image }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card>
        <img src={image} alt="teammate" className="img-fluid" />
        <Card.Title> Shrreya Bhatachaarya </Card.Title>
        <p>Lead Trainer</p>
        <Col className="d-flex flex-row justify-content-center">
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
            <Linkedn />
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
    </Col>
  );
}

export default TeammateCard;
