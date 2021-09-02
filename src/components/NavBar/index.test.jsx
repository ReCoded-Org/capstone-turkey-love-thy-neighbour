import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from ".";

describe("Navbar", () => {
  const mockState = {
    user: {
      authCred: {
        user: {
          uid: "Test Uid",
        },
      },
      isSignedIn: true,
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
          <Router>
            <Navbar />
          </Router>
        </Provider>
      )
      .toJSON();
  });

  it("renders Navbar correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
