import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

import { useFormik } from "formik";

import NeighborsCards from "../../components/NeighborsCards";

import PPMaleSVG from "../../images/Profile/PPMaleSVG.svg";
import PPFemaleSVG from "../../images/Profile/PPFemaleSVG.svg";
import PPGenderless from "../../images/Profile/PPGenderless.png";

import { firestore } from "../../firebaseConfig";

import "./index.scss";

// maybe you can search for the people in other districts

function Neighbors() {
  const [neighborsData, setNeighborsData] = useState([]);
  const firestoreDoc = useSelector((state) => state.user.firestoreDoc);
  const { district } = firestoreDoc;

  useEffect(() => {
    function fetchAllNeighbors() {
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
    fetchAllNeighbors();
  }, []);

  const formik = useFormik({
    initialValues: {
      gender: "All",
      age: 15,
      interests: [],
    },
    onSubmit(values) {
      console.log("submitted!");
    },
  });

  console.log(formik.values.gender);

  return (
    <Container fluid className="neighbors-container-fluid">
      <Container className="neighbors-content-container">
        <div className="my-3 d-flex justify-content-between">
          <div className="w-100 text-center text-sm-center text-md-start">
            <h1>Nearby neighbors to meet :</h1>
            <div className="filter-wrapper">
              <form onSubmit={formik.handleSubmit}>
                <select name="gender" onChange={formik.handleChange}>
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Not prefer to say">Not prefer to say</option>
                </select>
                <select>
                  <option>Age</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                </select>
                <select>
                  <option>Interests</option>
                  <option>option 2</option>
                  <option>option 3</option>
                  <option>option 4</option>
                </select>
                <button type="submit">Find!</button>
              </form>
            </div>
          </div>
          <div className="quote-wrapper d-flex align-items-center d-none d-sm-none d-md-block">
            <p>
              By clicking on “Invite to Meet Button” you can notify the user you
              want to meet with and if he/she returns back to your notification,
              your e-mail adresses will be visible to each other.
            </p>
          </div>
        </div>
        <Row className="neighbors-cards d-flex justify-content-around flex-wrap">
          {neighborsData.map((userDoc) => {
            let photo;
            if (userDoc.profileImageUrl === "") {
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
              <Col xs={12} sm={6} md={3} key={userDoc.email}>
                <NeighborsCards photo={photo} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Neighbors;
