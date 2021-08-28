import React from "react";

import { Card } from "react-bootstrap";

function NotificationMenuItem({ invitationNotificationMessage }) {
  return (
    <Card>
      {invitationNotificationMessage}
      <br />
      <button type="button">Good</button>
      <button type="button">Bad</button>
      <button type="button">Didn&lsquo;t Meet</button>
    </Card>
  );
}

export default NotificationMenuItem;
