import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import EditProfileModal from "../../components/EditProfileModal";
import { EditProfileButton } from "../../components/CustomButtons/index";
import "./index.scss";

// alternative bg image url: https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?size=626&ext=jpg
// alternative image url: https://www.acibadem.com.tr/assets/images/doctors/kutay-colakoglu-banner.png

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isEditProfileOpen = useSelector(
    (state) => state.popup.isEditProfileOpen
  );
  const { firestoreDoc, backgroundImageUrl, profileImageUrl } = useSelector(
    (state) => state.user.firestoreDoc
  );

  return (
    <Container
      fluid
      className="profile-page-bg"
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
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
                alt="profilePic"
                src={profileImageUrl || PPMaleSVG}
              />
            </div>
            <div>
              <EditProfileButton
                onClick={() => dispatch({ type: "editProfile" })}
              >
                Edit Profile
              </EditProfileButton>
              {isEditProfileOpen && <EditProfileModal />}
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
                        First Name:{" "}
                        <span>
                          {!firestoreDoc?.firstName
                            ? "Ali Riza"
                            : firestoreDoc.firstName}
                        </span>
                      </li>
                      <li>
                        Last Name:{" "}
                        <span>
                          {!firestoreDoc?.firstName
                            ? "Sahin"
                            : firestoreDoc.lastName}
                        </span>
                      </li>
                      <li>
                        Gender:{" "}
                        <span>
                          {!firestoreDoc?.gender ? "M/F" : firestoreDoc.gender}
                        </span>
                      </li>
                      <li>
                        Age:{" "}
                        <span>
                          {!firestoreDoc?.age ? "15" : firestoreDoc.age}
                        </span>
                      </li>
                      <li>
                        Education:{" "}
                        <span>
                          {!firestoreDoc?.education
                            ? "Enter you Education"
                            : firestoreDoc.education}
                        </span>
                      </li>
                      <li>
                        District:{" "}
                        <span>
                          {!firestoreDoc?.district
                            ? "Istanbul"
                            : firestoreDoc.district}
                        </span>
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
                          {!firestoreDoc?.bio
                            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper gravida tincidunt aliquam quam."
                            : firestoreDoc.bio}
                        </span>
                      </li>
                      <li>
                        Interests:{" "}
                        <span>
                          {/* {!firestoreDoc?.interests
                            ? "Learning, coding, collaborating."
                            : firestoreDoc.interests}  removed this because react would think the document field that is an array should be mapped over and we are doing that in our multiselect branch with another library. If I include this I'll have merge the two in order to make this work. */}
                          Default interest.
                        </span>
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
                        Email:{" "}
                        <span>
                          {!firestoreDoc?.email
                            ? "example@example.com"
                            : firestoreDoc.email}
                        </span>
                      </li>
                      <li>
                        Phone:{" "}
                        <span>
                          {!firestoreDoc?.number
                            ? "+90 537 779 50 60"
                            : firestoreDoc.number}
                        </span>
                      </li>
                      <li>
                        Address:{" "}
                        <span>
                          {!firestoreDoc?.address
                            ? "Somewhere in the world"
                            : firestoreDoc.address}
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
  );
};

export default ProfilePage;
