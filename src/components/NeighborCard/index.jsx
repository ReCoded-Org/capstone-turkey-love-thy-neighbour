import React from "react";

import { Card } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { send } from "emailjs-com";
import { NeighborCardButton } from "../CustomButtons";

import { firestore } from "../../firebaseConfig";

import "./index.scss";

function NeighborCard({
  photo,
  firstName,
  lastName,
  age,
  gender,
  email,
  setSelectedNeighbor,
}) {
  const dispatch = useDispatch();

  function sendEmail() {
    send("service_9rwjsp6", "template_qlu5ttf", {
      from_name: "Ali Riza",
      to_name: "Kutay",
      message: "Heyo",
      to_email: "kutay.kagan.ozenn@gmail.com",
    })
      .then(() => console.log("wassusssssssppp"))
      .catch((err) => console.error("there's an error!", err));
  }

  return (
    <Card className="neighbor-card mb-2 mx-auto">
      <Card.Img
        variant="top"
        src={photo}
        className="img-fluid"
        id={email}
        onClick={(event) => {
          firestore
            .collection("users")
            .where("email", "==", event.target.id)
            .get()
            .then((snapshot) => setSelectedNeighbor(snapshot.docs[0].data()));
          dispatch({ type: "neighborSummary" });
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="text-center">{`${firstName} ${lastName}`}</Card.Title>
        <small className="text-center">{`${age} / ${gender}`}</small>
        <NeighborCardButton onClick={sendEmail}>
          Invite To Meet!
        </NeighborCardButton>
      </Card.Body>
    </Card>
  );
}

export default NeighborCard;
