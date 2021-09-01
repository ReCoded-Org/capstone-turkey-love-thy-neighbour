import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import PrimaryHero from ".";

describe("PrimaryHero page", () => {
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
          <PrimaryHero />
        </Provider>
      )
      .toJSON();
  });

  it("renders PrimaryHero page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
