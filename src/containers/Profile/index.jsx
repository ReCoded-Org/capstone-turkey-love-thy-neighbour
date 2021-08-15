import React, { useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { fetchUpdatedUser } from "../../slices/userSlice";

import PPMaleSVG from "../../images/ProfilePage/PPMaleSVG.svg";
import EditProfileModal from "../../components/EditProfileModal";
import { EditProfileButton } from "../../components/CustomButtons/index";
import "./index.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const isEditProfileOpen = useSelector(
    (state) => state.popup.isEditProfileOpen
  );
  const firestoreDoc = useSelector((state) => state.user.firestoreDoc);
  const uid = useSelector((state) => state.user.authCred?.uid);

  useEffect(() => {
    const userFirestoreDocListener = dispatch(fetchUpdatedUser(uid));
    console.log("asdsad");
    return () => {
      return userFirestoreDocListener();
    };
  }, []);

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
                          {!firestoreDoc?.bio
                            ? "Learning, coding, collaborating."
                            : firestoreDoc.bio}
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
                          {!firestoreDoc?.phone
                            ? "+90 537 779 50 60"
                            : firestoreDoc.phone}
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
