import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import NotificationsMenu from ".";

describe("NotificationsMenu", () => {
  const data = {
    invitationNotificationObject: {
      message: "test",
      id: "test",
    },
  };
  const mockState = {
    user: {
      authCred: {
        uid: "Test Uid",
      },
      firestoreDoc: {
        invitationNotifications: [
          {
            id: "test",
            message: "test",
          },
        ],
      },
    },
  };
  const mockStore = configureStore();
  let store;
  let tree;

  beforeEach(() => {
    store = mockStore(mockState);
    tree = renderer
      .create(
        <Provider store={store}>
          <NotificationsMenu />
        </Provider>
      )
      .toJSON();
  });

  it("renders NotificationsMenu correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
