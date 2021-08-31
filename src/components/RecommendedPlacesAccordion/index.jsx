import React from "react";

import { useTranslation } from "react-i18next";

import { Carousel, Accordion } from "react-bootstrap";
import { recommendedPlaces } from "../../utils/constants";

function RecommendedPlacesAccordion({ district }) {
  const { t, i18n } = useTranslation();

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {t("neighbors_recommended_pholder")}
        </Accordion.Header>
        <Accordion.Body>
          <Carousel>
            {recommendedPlaces[district].map((placeObj) => {
              return (
                <Carousel.Item key={placeObj.name}>
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
