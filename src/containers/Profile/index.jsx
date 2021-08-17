import React, { useState } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import EditProfileModal from "../../components/EditProfileModal";
import { EditProfileButton } from "../../components/CustomButtons/index";
import "./index.scss";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(!showModal);

  return (
    <Container fluid className="profile-page-bg">
      <Container className="profile-content-container d-flex flex-column justify-content-center align-items-center flex-wrap align-content-center">
        <Row>
          <Col
            xs={12}
            sm={12}
            className="d-flex flex-column align-items-center mb-3"
          >
            <div>
              <img className="profile-photo" alt="profilePic" src={PPMaleSVG} />
            </div>
            <div>
              <EditProfileButton onClick={handleClick} type="submit">
                Edit Profile
              </EditProfileButton>
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
                        Bio:{" "}
                        <span>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Semper gravida tincidunt aliquam quam.
                        </span>
                      </li>
                      <li>
                        Interests:{" "}
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
