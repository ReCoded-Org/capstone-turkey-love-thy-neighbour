import React from "react";

import { Card } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { NeighborsCardsButton } from "../CustomButtons";

import "./index.scss";

function NeighborCard({ photo, firstName, lastName, email, age, gender }) {
  const dispatch = useDispatch();

  return (
    <Card className="neighbor-card mb-2 mx-auto">
      <Card.Img
        variant="top"
        src={photo}
        className="img-fluid"
        id={email}
        onClick={() => dispatch({ type: "popupProfile" })}
      />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="text-center">{`${firstName} ${lastName}`}</Card.Title>
        <small className="text-center">{`${age} / ${gender}`}</small>
        <NeighborsCardsButton>Invite To Meet!</NeighborsCardsButton>
      </Card.Body>
    </Card>
  );
}

export default NeighborCard;
