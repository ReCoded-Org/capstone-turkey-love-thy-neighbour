import { React } from "react";

import { Modal, Container, Card } from "react-bootstrap";

import { send } from "emailjs-com";

import { useDispatch, useSelector } from "react-redux";

import { createInterestString } from "../../utils/helpers";

import { NeighborCardButton } from "../CustomButtons";

import PPMaleSVG from "../../images/Profile/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/Profile/PPFemaleSVG.svg";
import PPGenderless from "../../images/Profile/PPGenderless.png";

import "./index.scss";

// first and last name below the image and outside the card
// we can show their aducation in here
// education, bio and interests

const NeighborSummaryModal = ({
  selectedNeighbor,
  setSelectedNeighbor,
  senderEmail,
  senderFullName,
  setEmailAlertStatus,
}) => {
  const dispatch = useDispatch();
  const isNeighborSummaryOpen = useSelector(
    (state) => state.popup.isNeighborSummaryOpen
  );
  const { firstName, lastName, email } = selectedNeighbor;

  function sendEmail() {
    setEmailAlertStatus("empty");
    send("service_9rwjsp6", "template_qlu5ttf", {
      from_name: senderFullName,
      from_email: senderEmail,
      to_name: `${firstName} ${lastName}`,
      to_email: email,
    })
      .then(() => setEmailAlertStatus("success"))
      .catch(() => setEmailAlertStatus("danger"));
    dispatch({ type: "neighborSummary" });
  }

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
                selectedNeighbor?.gender === "Prefer not to say"
                  ? { width: "190px" }
                  : null
              }
              src={
                selectedNeighbor?.profileImageUrl ||
                /* eslint-disable-next-line no-nested-ternary */
                (selectedNeighbor?.gender === "Male"
                  ? PPMaleSVG
                  : selectedNeighbor?.gender === "Female"
                  ? PPFemaleSVG
                  : PPGenderless)
              }
            />
            <span>{`${selectedNeighbor?.firstName} ${selectedNeighbor?.lastName}`}</span>
          </Modal.Header>

          <Modal.Body>
            <Card className="info-cards white-card">
              <Card.Body>
                <Card.Title className="card-title">Furthermore Info</Card.Title>
                <ul className="d-flex flex-column justify-content-around  mb-0">
                  <li>
                    Bio:{" "}
                    <span>
                      {selectedNeighbor?.bio ||
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper gravida tincidunt aliquam quam."}
                    </span>
                  </li>
                  <li>
                    Interests:{" "}
                    <span>
                      {selectedNeighbor?.interests === "Default interest." ||
                      selectedNeighbor?.interests === undefined
                        ? "Default interest."
                        : createInterestString(selectedNeighbor.interests)}
                    </span>
                  </li>
                  <li>
                    Education:{" "}
                    <span>
                      {selectedNeighbor?.education || "Default education."}
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <NeighborCardButton className="mx-auto" onClick={sendEmail}>
              Invite To Meet!
            </NeighborCardButton>
          </Modal.Footer>
        </Container>
      </Modal>
    )
  );
};

export default NeighborSummaryModal;
