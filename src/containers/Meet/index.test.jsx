import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Meet from ".";

describe("Meet page", () => {
  const mockState = {
    user: {
      firestoreDoc: {
        firstName: "Test User",
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
          <Router>
            <Meet />
          </Router>
        </Provider>
      )
      .toJSON();
  });

  it("renders Meet page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
