import React from "react";

import { Card } from "react-bootstrap";

// import PropTypes from "prop-types";

import { NeighborsCardsButton } from "../CustomButtons";

import "./index.scss";

function NeighborsCards({ photo, firstName, lastName }) {
  return (
    <Card className="neighbor-card mx-auto mb-2">
      <Card.Img variant="top" src={photo} className="img-fluid" />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="text-center">{`${firstName} ${lastName}`}</Card.Title>
        <NeighborsCardsButton>Invite To Meet!</NeighborsCardsButton>
      </Card.Body>
    </Card>
  );
}

// NeighborsCards.propTypes = {
//   userDoc: PropTypes.object,
// };

export default NeighborsCards;
