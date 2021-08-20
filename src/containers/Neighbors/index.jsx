import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { useFormik } from "formik";
import NeighborsCards from "../../components/NeighborsCards";

import { firestore } from "../../firebaseConfig";

import "./index.scss";

// maybe you can search for the people in other districts

function Neighbors() {
  const [neighborsData, setNeighborsData] = useState([]);

  useEffect(() => {
    function fetchAllNeighbors() {
      return firestore
        .collection("users")
        .get()
        .then((snapshot) => {
          const { docs } = snapshot;
          const users = docs.map((user) => user.data());
          setNeighborsData(users);
        });
    }
    fetchAllNeighbors();
  }, []);

  console.log("neighborsData", neighborsData);

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

  return (
    <Container fluid className="neighbors-container-fluid">
      <Container className="neighbors-content-container">
        <div className="my-3 d-flex justify-content-between">
          <div className="w-100 text-center text-sm-center text-md-start">
            <h1>Nearby neighbors to meet :</h1>
            <div className="filter-wrapper">
              <select>
                <option>All</option>
                <option>Male</option>
                <option>Female</option>
                <option>Not prefer to say</option>
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
            return (
              <Col xs={12} sm={6} md={3}>
                <NeighborsCards userDoc={userDoc} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Neighbors;
