import React from "react";

import { CloseButton } from "react-bootstrap";

import { useSelector } from "react-redux";

import { GoodFeedbackButton, BadFeedbackButton } from "../CustomButtons/index";

import firebaseApp, { firestore } from "../../firebaseConfig";

import { ReactComponent as thumbsUp } from "../../images/Icons/thumbs-up.svg";

import { ReactComponent as thumbsDown } from "../../images/Icons/thumbs-down.svg";

import "./index.scss";

function NotificationMenuItem({ invitationNotificationObject }) {
  const { message, id } = invitationNotificationObject;
  const uid = useSelector((state) => state.user.authCred?.uid);

  function handleButtonClick(event) {
    const buttonText = event.target.innerText;

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
    <div className="notification-menu-item">
      <div className="notification-menu-item-content">
        <p className="text-center">{message}</p>
        <div className="feedback-buttons d-flex justify-content-center">
          <GoodFeedbackButton
            type="button"
            className="me-3"
            id={id}
            onClick={handleButtonClick}
          >
            <thumbsUp />
          </GoodFeedbackButton>
          <BadFeedbackButton type="button" id={id} onClick={handleButtonClick}>
            <thumbsDown />
          </BadFeedbackButton>
          <CloseButton onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default NotificationMenuItem;
