import React from "react";

import { Carousel, Accordion } from "react-bootstrap";
import { recommendedPlaces } from "../../utils/constants";

function RecommendedPlacesAccordion({ district }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Recommended Places</Accordion.Header>
        <Accordion.Body>
          <Carousel>
            {recommendedPlaces[district].map((placeObj) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={placeObj.image}
                    alt={`${placeObj.name}`}
                  />
                  <Carousel.Caption>
                    <h3>{placeObj.name}</h3>
                    <p>{placeObj.address}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default RecommendedPlacesAccordion;
