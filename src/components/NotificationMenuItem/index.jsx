import React from "react";

import { Card } from "react-bootstrap";

import { useSelector } from "react-redux";

import firebaseApp, { firestore } from "../../firebaseConfig";

function NotificationMenuItem({ invitationNotificationObject }) {
  const { message, id } = invitationNotificationObject;
  const uid = useSelector((state) => state.user.authCred?.uid);

  function handleButtonClick(event) {
    const buttonText = event.target.innerText;
    const notificationObjId = event.target.id;

    firestore
      .collection("users")
      .doc(uid)
      .update({
        // eslint-disable-next-line import/no-named-as-default-member
        invitationNotifications: firebaseApp.firestore.FieldValue.arrayRemove({
          message,
          id,
        }),
      });

    if (buttonText === "Good") {
      firestore
        .collection("data")
        .doc("feedbackData")
        .update({
          // eslint-disable-next-line import/no-named-as-default-member
          positiveFeedback: firebaseApp.firestore.FieldValue.increment(1),
        });
    }
    if (buttonText === "Bad") {
      firestore
        .collection("data")
        .doc("feedbackData")
        .update({
          // eslint-disable-next-line import/no-named-as-default-member
          negativeFeedback: firebaseApp.firestore.FieldValue.increment(1),
        });
    }
  }

  return (
    <Card>
      {message}
      <br />
      <button type="button" id={id} onClick={handleButtonClick}>
        Good
      </button>
      <button type="button" id={id} onClick={handleButtonClick}>
        Bad
      </button>
      <button type="button" id={id} onClick={handleButtonClick}>
        X
      </button>
    </Card>
  );
}

export default NotificationMenuItem;
