import React from "react";

import { Dropdown } from "react-bootstrap";

function NotificationMenuItem({ invitationNotificationMessage }) {
  return (
    <Dropdown.Item>
      {invitationNotificationMessage}
      <br />
      <button type="button">Good</button>
      <button type="button">Bad</button>
      <button type="button">Didn&lsquo;t Meet</button>
    </Dropdown.Item>
  );
}

export default NotificationMenuItem;
