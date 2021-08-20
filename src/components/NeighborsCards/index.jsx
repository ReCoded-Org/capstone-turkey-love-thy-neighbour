import React from "react";

import { Card } from "react-bootstrap";

import PPMaleSVG from "../../images/Profile/PPMaleSVG.svg";

import { NeighborsCardsButton } from "../CustomButtons";

import "./index.scss";

function NeighborsCards({ userDoc }) {
  return (
    <Card className="neighbor-card mx-auto mb-2">
      <Card.Img variant="top" src={PPMaleSVG} className="img-fluid" />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="text-center">Neighbor 1</Card.Title>
        <NeighborsCardsButton>Invite To Meet!</NeighborsCardsButton>
      </Card.Body>
    </Card>
  );
}

export default NeighborsCards;
