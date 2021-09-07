import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import NeighborCard from ".";

describe("NeighborCard", () => {
  const props = {
    photo: "test",
    firstName: "test",
    lastName: "test",
    age: "test",
    gender: "test",
    email: "test",
    setSelectedNeighbor: "test",
    senderEmail: "test",
    senderFullName: "test",
    setEmailAlertStatus: "test",
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
          <NeighborCard {...props} />
        </Provider>
      )
      .toJSON();
  });

  it("renders NeighborCard correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
