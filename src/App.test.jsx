// NOT WORKING

import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from ".";

describe("App", () => {
  const mockState = {
    user: {
      isSignedIn: false,
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
            <App />
          </Router>
        </Provider>
      )
      .toJSON();
  });

  it("renders App correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
