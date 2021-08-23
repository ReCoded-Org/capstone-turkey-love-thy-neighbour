import React from "react";

import { Carousel } from "react-bootstrap";

function NeighborsCarouselItem({ image, name, address }) {
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={image} alt={`${name}`} />
      <Carousel.Caption>
        <h3>{name}</h3>
        <p>{address}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default NeighborsCarouselItem;
