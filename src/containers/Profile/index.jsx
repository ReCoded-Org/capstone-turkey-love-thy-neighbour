import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import PPMaleSVG from "../../images/Profile/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/Profile/PPFemaleSVG.svg";
import EditProfileModal from "../../components/EditProfileModal";
import { EditProfileButton } from "../../components/CustomButtons/index";
import "./index.scss";

// alternative bg image url: https://img.freepik.com/free-photo/abstract-flowing-neon-wave-background_53876-101942.jpg?size=626&ext=jpg
// alternative image url: https://www.acibadem.com.tr/assets/images/doctors/kutay-colakoglu-banner.png

const Profile = () => {
  const dispatch = useDispatch();
  const isEditProfileOpen = useSelector(
    (state) => state.popup.isEditProfileOpen
  );
  const { firestoreDoc, authCred } = useSelector((state) => state.user);
  const { backgroundImageUrl, profileImageUrl, interests, gender } =
    firestoreDoc;
  const { email } = authCred;

  function createInterestString() {
    console.log("initialised!");
    let interestsString = "";
    interests.forEach((interestObj, index, array) => {
      if (index === array.length - 1) {
        interestsString += `${interestObj.content}.`;
        return;
      }
      interestsString += `${interestObj.content} | `;
    });
    return interestsString;
  }
  console.log(
    firestoreDoc?.interests instanceof Array &&
      firestoreDoc?.interests instanceof Object
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
                src={
                  profileImageUrl ||
                  (gender === "Male" ? PPMaleSVG : PPFemaleSVG)
                }
              />
            </div>
            <div>
              <EditProfileButton
                onClick={() => dispatch({ type: "editProfile" })}
              >
                Edit Profile
              </EditProfileButton>
              <EditProfileModal showModal={isEditProfileOpen} />
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
                        First Name:{" "}
                        <span>
                          {firestoreDoc.firstName || "Default first name."}
                        </span>
                      </li>
                      <li>
                        Last Name:{" "}
                        <span>
                          {firestoreDoc.lastName || "Default last name."}
                        </span>
                      </li>
                      <li>
                        Gender:{" "}
                        <span>{firestoreDoc.gender || "Default gender."}</span>
                      </li>
                      <li>
                        Age: <span>{firestoreDoc.age || "Default age."}</span>
                      </li>
                      <li>
                        Education:{" "}
                        <span>
                          {firestoreDoc.education || "Defualt education."}
                        </span>
                      </li>
                      <li>
                        District:{" "}
                        <span>
                          {firestoreDoc.district || "Default district."}
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
                          {firestoreDoc.bio ||
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper gravida tincidunt aliquam quam."}
                        </span>
                      </li>
                      <li>
                        Interests:{" "}
                        <span>
                          {/* {!firestoreDoc?.interests &&
                          firestoreDoc?.interests !== "Default interest."
                            ? "Default interest."
                            : createInterestString()} */}
                          {/* 
                          {"Default interest." ||
                            (firestoreDoc?.interests instanceof Array &&
                            firestoreDoc?.interests instanceof Object
                              ? createInterestString
                              : false)} */}

                          {firestoreDoc?.interests === "Default interest." ||
                          firestoreDoc?.interests === undefined
                            ? "Default interest."
                            : createInterestString()}
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
                        Email: <span>{email}</span>
                      </li>
                      <li>
                        Phone:{" "}
                        <span>
                          {firestoreDoc.number || "+90 123 456 78 90"}
                        </span>
                      </li>
                      <li>
                        Address:{" "}
                        <span>
                          {firestoreDoc.address || "Somewhere in the world"}
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

export default Profile;
