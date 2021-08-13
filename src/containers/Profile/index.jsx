import React, { useState } from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import EditProfileModal from "../../components/EditProfileModal";
import "./index.scss";

const ProfilePage = () => {
  // modal states
  // TODO: use one state that has an object of states
  // TODO: Replace buttons with the custom buttons
  // remove paddins from the columns
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(!showModal);

  //     TODO: Make the gap between the sections smaller

  return (
    <Container fluid className="profile-page-bg">
      <Container className="profile-content-container d-flex flex-column justify-content-center align-items-center flex-wrap align-content-center">
        <Row>
          <Col
            xs={12}
            sm={12}
            className="d-flex flex-column align-items-center mb-3 mt-5 mt-sm-5 mt-md-0"
          >
            <div>
              <img className="profile-photo" alt="profilePic" src={PPMaleSVG} />
            </div>
            <div>
              <Button
                onClick={handleClick}
                className="edit-button"
                type="submit"
              >
                Edit Profile
              </Button>
              {showModal && (
                <EditProfileModal
                  handleClick={handleClick}
                  showModal={showModal}
                />
              )}
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
                    {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                    <ul className="d-flex flex-column justify-content-around  mb-0">
                      <li>
                        First Name: <span>Ali Rıza</span>
                      </li>
                      <li>
                        Last Name: <span>Şahin</span>
                      </li>
                      <li>
                        Gender: <span>Male</span>
                      </li>
                      <li>
                        Age: <span>19</span>
                      </li>
                      <li>
                        Education: <span>High School Graduate</span>
                      </li>
                      <li>
                        District: <span>Sultanbeyli</span>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <Card className="info-cards" id="blue-card">
                  <Card.Body>
                    <Card.Title className="card-title">About You</Card.Title>
                    <ul className="d-flex flex-column justify-content-around  mb-0">
                      <li>
                        Bio:
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Semper gravida tincidunt aliquam quam.
                        </span>
                      </li>
                      <li>
                        Interests:
                        <span>Learning, coding, collaborating, designing.</span>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <Card className="info-cards white-card">
                  <Card.Body>
                    <Card.Title className="card-title">Contact</Card.Title>
                    {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                    <ul className="d-flex flex-column justify-content-around  mb-0">
                      <li>
                        Email: <span>ars.style@hotmail.com</span>
                      </li>
                      <li>
                        Phone: <span>+90 537 779 50 60</span>
                      </li>
                      <li>
                        Adress: <span>Somewhere in time</span>
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
  );
};

export default ProfilePage;
