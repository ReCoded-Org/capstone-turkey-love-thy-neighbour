import React from "react";

import { Dropdown } from "react-bootstrap";

import { ReactComponent as NotificationBellSVG } from "../../images/notification-bell.svg";

import "./index.scss";

function NotificationMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <NotificationBellSVG />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: "60%" }}>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default NotificationMenu;
