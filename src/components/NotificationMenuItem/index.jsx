import React from "react";

import { Card } from "react-bootstrap";

import { useSelector } from "react-redux";

import firebaseApp, { firestore } from "../../firebaseConfig";

function NotificationMenuItem({ invitationNotificationMessage }) {
  const firestoreDoc = useSelector((state) => state.user.firestoreDoc);

  function removeInvitationNotificationMessage() {}

  return (
    <Card>
      {invitationNotificationMessage}
      <br />
      <button type="button">Good</button>
      <button type="button">Bad</button>
      <button type="button">Close</button>
    </Card>
  );
}

export default NotificationMenuItem;
