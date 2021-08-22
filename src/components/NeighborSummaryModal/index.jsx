import { React, useState, useEffect } from "react";

import { Modal, Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { firestore } from "../../firebaseConfig";

import PPMaleSVG from "../../images/Profile/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/Profile/PPFemaleSVG.svg";
import PPGenderless from "../../images/Profile/PPGenderless.png";

import "./index.scss";

const NeighborSummaryModal = ({ neighborEmail }) => {
  const [neighbor, setNeighbor] = useState();
  const dispatch = useDispatch();
  const isNeighborPopupOpen = useSelector(
    (state) => state.popup.isNeighborPopupOpen
  );

  useEffect(() => {
    function findTheNeighbor() {
      return firestore
        .collection("users")
        .where("email", "==", neighborEmail)
        .get()
        .then((snapshot) => {
          setNeighbor(snapshot.docs[0].data());
        });
    }
    findTheNeighbor();
  }, [dispatch]);

  function createInterestString() {
    let interestsString = "";
    neighbor?.interests.forEach((interestObj, index, array) => {
      if (index === array.length - 1) {
        interestsString += `${interestObj.content}.`;
        return;
      }
      interestsString += `${interestObj.content} | `;
    });
    return interestsString;
  }

  function togglePopupProfile() {
    dispatch({ type: "popupProfile" });
  }

  console.log("neighbor", neighbor);

  return (
    <Modal
      show={isNeighborPopupOpen}
      onHide={togglePopupProfile}
      id="edit-profile-modal"
    >
      <Container
        fluid
        className="profile-page-bg"
        style={
          neighbor?.backgroundImageUrl
            ? { backgroundImage: `url(${neighbor.backgroundImageUrl})` }
            : null
        }
      >
        <Container className="profile-content-container d-flex flex-column justify-content-center align-items-center flex-wrap align-content-center">
          <Row>
            <Col
              xs={12}
              sm={12}
              className="d-flex flex-column align-items-center mb-3"
            >
              <div>
                <img
                  className="profile-photo"
                  alt="profile"
                  style={
                    neighbor?.gender === "Prefer not to say"
                      ? { width: "190px" }
                      : null
                  }
                  src={
                    neighbor?.profileImageUrl ||
                    /* eslint-disable-next-line no-nested-ternary */
                    (neighbor?.gender === "Male"
                      ? PPMaleSVG
                      : neighbor?.gender === "Female"
                      ? PPFemaleSVG
                      : PPGenderless)
                  }
                />
              </div>
            </Col>

            <Col xs={12} sm={12}>
              <Row className="cards-row d-flex justify-content-around flex-wrap">
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card className="info-cards white-card">
                    <Card.Body>
                      <Card.Title className="card-title">General</Card.Title>
                      <ul className="d-flex flex-column justify-content-around  mb-0">
                        <li>
                          Bio:{" "}
                          <span>
                            {neighbor?.bio ||
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper gravida tincidunt aliquam quam."}
                          </span>
                        </li>
                        <li>
                          Interests:{" "}
                          <span>
                            {neighbor?.interests === "Default interest." ||
                            neighbor?.interests === undefined
                              ? "Default interest."
                              : createInterestString()}
                          </span>
                        </li>
                        <li>
                          Education:{" "}
                          <span>
                            {neighbor?.education || "Default education."}
                          </span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </Modal>
  );
};

export default NeighborSummaryModal;
