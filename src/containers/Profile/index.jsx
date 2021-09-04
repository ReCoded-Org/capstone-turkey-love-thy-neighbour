import React from "react";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

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
                {t("profile_edit_button")}
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
                    <Card.Title className="card-title">
                      {t("profile_general_info_card_title")}
                    </Card.Title>
                    <ul className="d-flex flex-column justify-content-around  mb-0">
                      <li>
                        {t("profile_general_info_card_firstname")}{" "}
                        <span>{firestoreDoc.firstName}</span>
                      </li>
                      <li>
                        {t("profile_general_info_card_lastname")}{" "}
                        <span>{firestoreDoc.lastName}</span>
                      </li>
                      <li>
                        {t("profile_general_info_card_gender")}{" "}
                        <span>
                          {firestoreDoc.gender ||
                            t("neighborssummod_gender_tba")}
                        </span>
                      </li>
                      <li>
                        {t("profile_general_info_card_age")}{" "}
                        <span>
                          {firestoreDoc.age || t("neighborssummod_age_tba")}
                        </span>
                      </li>
                      <li>
                        {t("profile_general_info_card_education")}{" "}
                        <span>
                          {firestoreDoc.education ||
                            t("neighborssummod_education_tba")}
                        </span>
                      </li>
                      <li>
                        {t("profile_general_info_card_district")}{" "}
                        <span>
                          {firestoreDoc.district ||
                            t("neighborssummod_district_tba")}
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
                    <Card.Title className="card-title">
                      {t("profile_about_you_title")}
                    </Card.Title>
                    <ul className="d-flex flex-column justify-content-around  mb-0">
                      <li>
                        {t("profile_about_you_bio")}{" "}
                        <span>
                          {firestoreDoc.bio || t("neighborssummod_bio_tba")}
                        </span>
                      </li>
                      <li>
                        {t("profile_about_you_interests")}{" "}
                        <span>
                          {!firestoreDoc?.interests
                            ? t("neighborssummod_interests_tba")
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
                    <Card.Title className="card-title">
                      {t("profile_contact_card_title")}
                    </Card.Title>
                    <ul className="d-flex flex-column justify-content-around  mb-0">
                      <li>
                        {t("profile_contact_card_email")}
                        <span>{email}</span>
                      </li>
                      <li>
                        {t("profile_contact_card_phone")}{" "}
                        <span>
                          {firestoreDoc.number || "+90 123 456 78 90"}
                        </span>
                      </li>
                      <li>
                        {t("profile_contact_card_adress")}{" "}
                        <span>
                          {firestoreDoc.address ||
                            t("neighborssummod_adress_tba")}
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
