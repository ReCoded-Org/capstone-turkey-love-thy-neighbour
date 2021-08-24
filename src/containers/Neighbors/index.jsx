import React, { useState, useEffect } from "react";

import { Container, Row, Col, Accordion, Carousel } from "react-bootstrap";

import { useSelector } from "react-redux";

import { useFormik } from "formik";

import Multiselect from "multiselect-react-dropdown";

import { newActivityList } from "../../utils/constants";

import RecommendedPlacesAccordion from "../../components/RecommendedPlacesAccordion";

import NeighborCard from "../../components/NeighborCard";

import NeighborSummaryModal from "../../components/NeighborSummaryModal";

import { NeighborsFilterButton } from "../../components/CustomButtons";

import PPMaleSVG from "../../images/Profile/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/Profile/PPFemaleSVG.svg";
import PPGenderless from "../../images/Profile/PPGenderless.png";

import { firestore } from "../../firebaseConfig";

import "./index.scss";

// Maybe you can search for the people in other districts
// TODO: THERE'S A POSSIBILITY OF THEM SIGNING UP AND GETTING INTO NEIGHBORS WITHOUT SUBMITTING EDIT PROFILE MODAL FORM AND IT WILL GIVE US AN ERROR!
// maybe you can solve this issue by making the only way of closing edit profile modal is submitting the form

function Neighbors() {
  const [selectedNeighbor, setSelectedNeighbor] = useState({});
  const [neighborsData, setNeighborsData] = useState([]);

  const firestoreDoc = useSelector((state) => state.user.firestoreDoc);
  const { district, email } = firestoreDoc;

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
      />
      <Container className="neighbors-content-container d-flex flex-column align-items-center">
        <div className="pt-2 pb-4 mx-3 mx-sm-0 text-center">
          <h1>Nearby neighbors to meet :</h1>
          <p>
            By clicking on “Invite to Meet Button” you can notify the user you
            want to meet with and if he/she returns back to your notification,
            your e-mail adresses will be visible to each other.
          </p>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter Your Neighbors</Accordion.Header>
              <Accordion.Body>
                <form onSubmit={formik.handleSubmit}>
                  <div className="gender-age-wrapper d-flex justify-content-between">
                    <div>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="gender">Gender:</label>
                      <select
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                      >
                        <option defaultValue value="All">
                          All
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">
                          Prefer not to say
                        </option>
                      </select>
                    </div>
                    <div>
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label htmlFor="age">Age:</label>
                      <select
                        id="age"
                        name="age"
                        onChange={formik.handleChange}
                      >
                        <option value="15 99">All</option>
                        <option value="15 25">15 - 25</option>
                        <option value="26 35">26 - 35</option>
                        <option value="36 45">36 - 45</option>
                        <option value="46 99">46+</option>
                      </select>
                    </div>
                  </div>
                  <Multiselect
                    placeholder="Select interests..."
                    displayValue="content"
                    onRemove={(selectedOptions) => {
                      formik.values.interests = selectedOptions;
                    }}
                    onSelect={(selectedOptions) => {
                      formik.values.interests = selectedOptions;
                    }}
                    options={newActivityList}
                    selectedValues={
                      formik.values.interests === "Default interest."
                        ? []
                        : formik.values.interests
                    }
                  />
                  <NeighborsFilterButton type="submit">
                    Find!
                  </NeighborsFilterButton>
                </form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <RecommendedPlacesAccordion district={district} />
        </div>
        <Row className="neighbors-cards d-flex justify-content-around flex-wrap w-100">
          {neighborsData
            .filter((userDoc) => userDoc.email !== email)
            .map((userDoc) => {
              let photo;
              if (
                userDoc.profileImageUrl === "" ||
                userDoc.profileImageUrl === undefined
              ) {
                if (userDoc.gender === "Prefer not to say") {
                  photo = PPGenderless;
                } else if (userDoc.gender === "Male") {
                  photo = PPMaleSVG;
                } else if (userDoc.gender === "Female") {
                  photo = PPFemaleSVG;
                }
              } else if (userDoc.profileImageUrl !== "") {
                photo = userDoc.profileImageUrl;
              }

              return (
                <Col xs={12} sm={6} md={4} key={userDoc.email}>
                  <NeighborCard
                    key={userDoc.email}
                    photo={photo}
                    firstName={userDoc.firstName}
                    lastName={userDoc.lastName}
                    gender={userDoc.gender}
                    age={userDoc.age}
                    email={userDoc.email}
                    setSelectedNeighbor={setSelectedNeighbor}
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
