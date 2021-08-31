import { React } from "react";

import { Modal, Container, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  createInterestString,
  getDefaultGenderImage,
} from "../../utils/helpers";

import { NeighborCardButton } from "../CustomButtons";

import "./index.scss";

const NeighborSummaryModal = ({ selectedNeighbor, setSelectedNeighbor }) => {
  const dispatch = useDispatch();
  const isNeighborSummaryOpen = useSelector(
    (state) => state.popup.isNeighborSummaryOpen
  );

  return (
    Object.keys(selectedNeighbor).length !== 0 && (
      <Modal
        show={isNeighborSummaryOpen}
        onHide={() => {
          dispatch({ type: "neighborSummary" });
          setSelectedNeighbor({});
        }}
        id="neighbor-summary-modal"
      >
        <Container
          fluid
          style={
            selectedNeighbor?.backgroundImageUrl
              ? {
                  backgroundImage: `url(${selectedNeighbor.backgroundImageUrl})`,
                }
              : null
          }
        >
          <Modal.Header className="d-flex justify-content-start">
            <img
              className="profile-photo"
              alt="profile"
              style={
                selectedNeighbor.gender === "Prefer not to say" &&
                !selectedNeighbor.profileImageUrl
                  ? { width: "190px" }
                  : null
              }
              src={
                selectedNeighbor.profileImageUrl ||
                getDefaultGenderImage(selectedNeighbor.gender)
              }
            />
            <span>{`${selectedNeighbor?.firstName} ${selectedNeighbor?.lastName}`}</span>
          </Modal.Header>

          <Modal.Body>
            <Card className="info-cards white-card">
              <Card.Body>
                <Card.Title className="card-title">Details</Card.Title>
                <ul className="d-flex flex-column justify-content-around  mb-0">
                  <li>
                    Age:{" "}
                    <span>
                      {selectedNeighbor?.age || "Age yet to be added."}
                    </span>
                  </li>
                  <li>
                    Gender: <span>{selectedNeighbor?.gender}</span>
                  </li>
                  <li>
                    Interests:{" "}
                    <span>
                      {selectedNeighbor?.interests ===
                        "Interests yet to be added." ||
                      selectedNeighbor?.interests === undefined
                        ? "Interests yet to be added."
                        : createInterestString(selectedNeighbor.interests)}
                    </span>
                  </li>
                  <li>
                    Education:{" "}
                    <span>
                      {selectedNeighbor?.education ||
                        "Education yet to be added."}
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <NeighborCardButton className="mx-auto">
              Invite To Meet!
            </NeighborCardButton>
          </Modal.Footer>
        </Container>
      </Modal>
    )
  );
};

export default NeighborSummaryModal;
