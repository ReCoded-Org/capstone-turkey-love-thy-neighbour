import React, { useState, useEffect } from "react";

import { Container, Row, Col, Accordion, Alert } from "react-bootstrap";

import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import { useFormik } from "formik";

import Multiselect from "multiselect-react-dropdown";

import { getDefaultGenderImage } from "../../utils/helpers";

import { newActivityList } from "../../utils/constants";

import RecommendedPlacesAccordion from "../../components/RecommendedPlacesAccordion";

import NeighborCard from "../../components/NeighborCard";

import NeighborSummaryModal from "../../components/NeighborSummaryModal";

import { NeighborsFilterButton } from "../../components/CustomButtons";

import { firestore } from "../../firebaseConfig";

import "./index.scss";

function Neighbors() {
  const [selectedNeighbor, setSelectedNeighbor] = useState({});
  const [neighborsData, setNeighborsData] = useState([]);
  const { t } = useTranslation();

  const firestoreDoc = useSelector((state) => state.user.firestoreDoc);
  const { district, email, firstName, lastName } = firestoreDoc;

  const [emailAlertStatus, setEmailAlertStatus] = useState("empty");

  useEffect(() => {
    function fetchAllNearbyNeighbors() {
      return firestore
        .collection("users")
        .where("district", "==", district)
        .get()
        .then((snapshot) => {
          const { docs } = snapshot;
          const users = docs.map((user) => user.data());
          setNeighborsData(users);
        });
    }
    fetchAllNearbyNeighbors();
  }, [district]);

  const formik = useFormik({
    initialValues: {
      gender: "All",
      age: "15 99",
      interests: [],
    },
    onSubmit(values) {
      let query = firestore
        .collection("users")
        .where("district", "==", district);

      if (values.gender !== "All") {
        query = query.where("gender", "==", values.gender);
      }
      if (values.age !== "15 99") {
        const [minAge, maxAge] = values.age
          .split(" ")
          .map((numberString) => parseInt(numberString, 10));
        query = query.where("age", ">=", minAge).where("age", "<=", maxAge);
      }
      if (values.interests.length !== 0) {
        query = query.where(
          "interests",
          "array-contains-any",
          values.interests
        );
      }
      query.get().then((querySnapshot) => {
        const { docs } = querySnapshot;
        const users = docs.map((doc) => doc.data());
        setNeighborsData(users);
      });
    },
  });

  return (
    <Container fluid className="neighbors-container-fluid">
      <NeighborSummaryModal
        selectedNeighbor={selectedNeighbor}
        setSelectedNeighbor={setSelectedNeighbor}
        senderEmail={email}
        senderFullName={`${firstName} ${lastName}`}
        setEmailAlertStatus={setEmailAlertStatus}
      />
      <Container className="neighbors-content-container d-flex flex-column align-items-center">
        <div className="pt-2 pb-4 mx-3 mx-sm-0 text-center">
          <h1>
            {t("neighbors_title")}{" "}
            {district.charAt(0) + district.slice(1).toLocaleLowerCase()}
          </h1>
          <p>{t("neighbors_text")}</p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {t("neighbors_filter_pholder")}
              </Accordion.Header>
              <Accordion.Body>
                <form onSubmit={formik.handleSubmit}>
                  <div className="gender-age-wrapper d-flex justify-content-between">
                    <div>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="gender">
                        {t("neighbors_filter_gender")}
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                      >
                        <option defaultValue value="All">
                          {t("neighbors_filter_all")}
                        </option>
                        <option value="Male">{t("male")}</option>
                        <option value="Female">{t("female")}</option>
                        <option value="Prefer not to say">
                          {t("prefernottosay")}
                        </option>
                      </select>
                    </div>
                    <div>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="age">{t("neighbors_filter_age")}</label>
                      <select
                        id="age"
                        name="age"
                        onChange={formik.handleChange}
                      >
                        <option value="15 99">
                          {t("neighbors_filter_all")}
                        </option>
                        <option value="15 25">15 - 25</option>
                        <option value="26 35">26 - 35</option>
                        <option value="36 45">36 - 45</option>
                        <option value="46 99">46+</option>
                      </select>
                    </div>
                  </div>
                  <Multiselect
                    placeholder={t("neighbors_filter_select_interests")}
                    displayValue="content"
                    onRemove={(selectedOptions) => {
                      formik.values.interests = selectedOptions;
                    }}
                    onSelect={(selectedOptions) => {
                      formik.values.interests = selectedOptions;
                    }}
                    options={newActivityList}
                    selectedValues={
                      formik.values.interests === "Interests yet to be added."
                        ? []
                        : formik.values.interests
                    }
                  />
                  <NeighborsFilterButton type="submit">
                    {t("neighbors_filter_button")}
                  </NeighborsFilterButton>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          {(district === "KADIKÖY" ||
            district === "BEYOĞLU" ||
            district === "ŞİŞLİ" ||
            district === "FATİH") && (
            <RecommendedPlacesAccordion district={district} />
          )}
          {emailAlertStatus !== "empty" && (
            <Alert
              className="mb-4 mt-2 w-100"
              variant={emailAlertStatus}
              onClose={() => setEmailAlertStatus("empty")}
              dismissible
            >
              {emailAlertStatus === "success" && t("neighbors_alert_success")}
              {emailAlertStatus === "danger" && t("neighbors_alert_danger")}
            </Alert>
          )}
        </div>
        <Row className="neighbors-cards d-flex justify-content-around flex-wrap w-100">
          {neighborsData
            .filter((userDoc) => userDoc.email !== email)
            .map((userDoc) => {
              return (
                <Col xs={12} sm={6} md={4} key={userDoc.email}>
                  <NeighborCard
                    key={userDoc.email}
                    photo={
                      userDoc.profileImageUrl ||
                      getDefaultGenderImage(userDoc.gender)
                    }
                    firstName={userDoc.firstName}
                    lastName={userDoc.lastName}
                    gender={userDoc.gender}
                    age={userDoc.age}
                    senderEmail={email}
                    senderFullName={`${firstName} ${lastName}`}
                    email={userDoc.email}
                    setSelectedNeighbor={setSelectedNeighbor}
                    setEmailAlertStatus={setEmailAlertStatus}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
}

export default Neighbors;
