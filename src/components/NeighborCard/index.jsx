import React, { useCallback } from "react";

import { Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

import { send } from "emailjs-com";

import { v4 as uuidv4 } from "uuid";
import { getTranslatedGender } from "../../utils/helpers";

import { NeighborCardButton } from "../CustomButtons";

import firebaseApp, { firestore } from "../../firebaseConfig";

import "./index.scss";

function NeighborCard({
  photo,
  firstName,
  lastName,
  age,
  gender,
  email,
  setSelectedNeighbor,
  senderEmail,
  senderFullName,
  setEmailAlertStatus,
}) {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.authCred?.uid);

  const { t } = useTranslation();
  const { language: currentLanguage } = i18next;

  const sendEmail = useCallback(() => {
    setEmailAlertStatus("empty");
    send("service_9rwjsp6", "template_qlu5ttf", {
      from_name: senderFullName,
      from_email: senderEmail,
      to_name: `${firstName} ${lastName}`,
      to_email: email,
    })
      .then(() => setEmailAlertStatus("success"))
      .catch(() => setEmailAlertStatus("danger"));
  }, [
    email,
    firstName,
    lastName,
    senderEmail,
    senderFullName,
    setEmailAlertStatus,
  ]);

  const handleInvitation = useCallback(() => {
    sendEmail();
    firestore
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        const { docs } = querySnapshot;
        const firstDoc = docs[0];
        const firstDocData = firstDoc.data();
        firstDocData.invitationNotifications.push({
          message: `How was your meeting with ${senderFullName}?`,
          id: uuidv4(),
        });
        firstDoc.ref.update(firstDocData);
      });
    firestore
      .collection("users")
      .doc(uid)
      .update({
        // eslint-disable-next-line import/no-named-as-default-member
        invitationNotifications: firebaseApp.firestore.FieldValue.arrayUnion({
          message: `How was your meeting with ${firstName} ${lastName}?`,
          id: uuidv4(),
        }),
      });
  }, [email, firstName, lastName, sendEmail, senderFullName, uid]);

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
        <h2 className="text-center">
          {firstName} <br /> {lastName}
        </h2>
        <small className="text-center">
          {`${age} / ${
            currentLanguage === "EN" ? gender : getTranslatedGender(gender)
          }`}
        </small>
        <NeighborCardButton onClick={handleInvitation}>
          {t("neighborcards_button")}
        </NeighborCardButton>
      </Card.Body>
    </Card>
  );
}

export default NeighborCard;
