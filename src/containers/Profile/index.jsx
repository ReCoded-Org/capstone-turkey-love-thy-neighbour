import React, { useState } from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import EditProfileModal from "../../components/EditProfileModal";
import "./index.scss";

const ProfilePage = () => {
  // modal states
  // TODO: use one state that has an object of states
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(!showModal);

  //     TODO: Make the gap between the sections smaller

  return (
    <section className="profile-page-bg container-fluid">
      <Container className="profile-page-main-container d-flex flex-column justify-content-center align-items-center flex-wrap align-content-center">
        <Row>
          <div>
            <img className="profile-photo" alt="profilePic" src={PPMaleSVG} />
          </div>
          <div>
            <Button onClick={handleClick} className="edit-button" type="submit">
              Edit Profile
            </Button>
            {showModal && (
              <EditProfileModal
                handleClick={handleClick}
                showModal={showModal}
              />
            )}
          </div>
          <div>
            <Container className="cards-container d-flex justify-content-around flex-wrap">
              <Card className="info-cards white-cards">
                <Card.Body>
                  <Card.Title className="card-title">General</Card.Title>
                  {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                  <ul>
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

              <Card className="info-cards blue-cards">
                <Card.Body>
                  <Card.Title className="card-title">About You</Card.Title>
                  {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}

                  <ul>
                    <li>
                      Bio:{" "}
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Semper gravida tincidunt aliquam quam.
                      </span>
                    </li>
                    <li>
                      Interests:{" "}
                      <span>Learning, coding, collaborating, designing.</span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="info-cards white-cards">
                <Card.Body>
                  <Card.Title className="card-title">Contact</Card.Title>
                  {/* //TODO : Display the card items in such a way that no whitespace is unused inside the card */}
                  <ul>
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
            </Container>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ProfilePage;
