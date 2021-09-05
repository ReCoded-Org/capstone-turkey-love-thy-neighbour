import React from "react";

import i18n from "i18next";

import { CloseButton } from "react-bootstrap";

import { useSelector } from "react-redux";

import { extractFullNameFromNotificationMessage } from "../../utils/helpers";

import { GoodFeedbackButton, BadFeedbackButton } from "../CustomButtons/index";

import firebaseApp, { firestore } from "../../firebaseConfig";

import "./index.scss";

function NotificationMenuItem({ invitationNotificationObject }) {
  const { message, id } = invitationNotificationObject;
  const uid = useSelector((state) => state.user.authCred?.uid);

  const { language: currentLanguage } = i18n;

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

    if (buttonText === "👍🏼") {
      firestore
        .collection("data")
        .doc("feedbackData")
        .update({
          // eslint-disable-next-line import/no-named-as-default-member
          positiveFeedback: firebaseApp.firestore.FieldValue.increment(1),
        });
    }
    if (buttonText === "👎🏼") {
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
        <p className="text-center">
          {currentLanguage === "EN"
            ? message
            : `${extractFullNameFromNotificationMessage(
                message
              )} ile olan buluşmanız nasıl geçti?`}
        </p>
        <div className="feedback-buttons d-flex justify-content-center">
          <GoodFeedbackButton
            type="button"
            className="me-3"
            id={id}
            onClick={handleButtonClick}
          >
            👍🏼
          </GoodFeedbackButton>
          <BadFeedbackButton type="button" id={id} onClick={handleButtonClick}>
            👎🏼
          </BadFeedbackButton>
          <CloseButton onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default NotificationMenuItem;
