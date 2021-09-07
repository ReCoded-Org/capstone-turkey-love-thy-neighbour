import React from "react";

import { Dropdown } from "react-bootstrap";

import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import NotificationMenuItem from "../NotificationMenuItem";

import { ReactComponent as NotificationBellSVG } from "../../images/notification-bell.svg";

import { firestore } from "../../firebaseConfig";

import "./index.scss";

function NotificationMenu() {
  const { t } = useTranslation();
  const invitationNotifications = useSelector(
    (state) => state.user.firestoreDoc?.invitationNotifications
  );
  const uid = useSelector((state) => state.user.authCred?.uid);

  function handleClearAll() {
    firestore
      .collection("users")
      .doc(uid)
      .update({ invitationNotifications: [] });
  }

  return (
    <Dropdown id="notifications-dropdown">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <NotificationBellSVG />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Header className="d-flex justify-content-between align-items-center">
          <p>{t("notification_title")}</p>
          <button
            type="button"
            className="clear-all-btn"
            onClick={handleClearAll}
          >
            {t("notification_clear_all")}
          </button>
        </Dropdown.Header>

        <Dropdown.Divider />

        {invitationNotifications?.length !== 0 &&
        invitationNotifications !== null &&
        invitationNotifications !== undefined ? (
          invitationNotifications.map((invitationNotificationObject) => (
            <NotificationMenuItem
              key={invitationNotificationObject.id}
              invitationNotificationObject={invitationNotificationObject}
            />
          ))
        ) : (
          <p className="no-items-p ms-3">{t("notification_no_notificatons")}</p>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NotificationMenu;
