import React from "react";

import { Dropdown } from "react-bootstrap";

import { useSelector } from "react-redux";

import NotificationMenuItem from "../NotificationMenuItem";

import { ReactComponent as NotificationBellSVG } from "../../images/notification-bell.svg";

import "./index.scss";

function NotificationMenu() {
  const invitationNotifications = useSelector(
    (state) => state.user.firestoreDoc?.invitationNotifications
  );

  return (
    <Dropdown id="notifications-menu" className="order-lg-last">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <NotificationBellSVG />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {invitationNotifications?.length !== 0 &&
        invitationNotifications !== null &&
        invitationNotifications !== undefined
          ? invitationNotifications.map((invitationNotificationObject) => (
              <NotificationMenuItem
                key={invitationNotificationObject.id}
                invitationNotificationObject={invitationNotificationObject}
              />
            ))
          : null}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NotificationMenu;
