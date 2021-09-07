import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import NotificationMenuItem from ".";

describe("NotificationMenuItem", () => {
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
          <NotificationMenuItem
            invitationNotificationObject={data.invitationNotificationObject}
          />
        </Provider>
      )
      .toJSON();
  });

  it("renders NotificationMenuItem correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
