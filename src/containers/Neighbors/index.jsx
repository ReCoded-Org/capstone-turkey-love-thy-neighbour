import React from "react";

import { Container, Row } from "react-bootstrap";

import "./index.scss";

function Neighbors() {
  return (
    <Container fluid className="neighbors-container-fluid">
      <Container className="neighbors-content-container">
        <div className="my-3">
          <h1>Nearby neighbors to meet :</h1>
          <div className="filter-wrapper">
            <select>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
            <select>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
        </div>
        <Row>hey</Row>
      </Container>
    </Container>
  );
}

export default Neighbors;
