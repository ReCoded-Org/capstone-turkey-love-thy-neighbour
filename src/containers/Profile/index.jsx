import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  createInterestString,
  getDefaultGenderImage,
} from "../../utils/helpers";

import EditProfileModal from "../../components/EditProfileModal";
import { EditProfileButton } from "../../components/CustomButtons";
import "./index.scss";

const Profile = () => {
  const dispatch = useDispatch();
  const isEditProfileOpen = useSelector(
    (state) => state.popup.isEditProfileOpen
  );
  const { firestoreDoc, authCred } = useSelector((state) => state.user);
  const { gender } = firestoreDoc;
  const { email } = authCred;

  return (
    <Container
      fluid
      className="profile-page-bg d-flex align-items-center"
      style={
        firestoreDoc?.backgroundImageUrl
          ? { backgroundImage: `url(${firestoreDoc.backgroundImageUrl})` }
          : null
      }
    >
      <Container className="profile-content-container d-flex flex-column justify-content-center align-items-center flex-wrap align-content-center">
        <Row>
          <Col
            xs={12}
            sm={12}
            className="d-flex flex-column align-items-center mb-3 pe-2"
          >
            <div>
              <img
                className="profile-photo"
                alt="profile"
                style={
                  gender === "Prefer not to say" &&
                  !firestoreDoc.profileImageUrl
                    ? { width: "190px" }
                    : null
                }
                src={
                  firestoreDoc?.profileImageUrl ||
                  getDefaultGenderImage(firestoreDoc.gender)
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
                        First Name: <span>{firestoreDoc.firstName}</span>
                      </li>
                      <li>
                        Last Name: <span>{firestoreDoc.lastName}</span>
                      </li>
                      <li>
                        Gender:{" "}
                        <span>
                          {firestoreDoc.gender || "Gender yet to be added."}
                        </span>
                      </li>
                      <li>
                        Age:{" "}
                        <span>
                          {firestoreDoc.age || "Age yet to be added."}
                        </span>
                      </li>
                      <li>
                        Education:{" "}
                        <span>
                          {firestoreDoc.education ||
                            "Education yet to be added."}
                        </span>
                      </li>
                      <li>
                        District:{" "}
                        <span>
                          {firestoreDoc.district || "District yet to be added."}
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
                          {firestoreDoc.bio || "Bio yet to be added."}
                        </span>
                      </li>
                      <li>
                        Interests:{" "}
                        <span>
                          {!firestoreDoc?.interests
                            ? "Interests yet to be added."
                            : createInterestString(firestoreDoc?.interests)}
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
                          {firestoreDoc.address || "Address yet to be added."}
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
