import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import NeighborSummaryModal from ".";

describe("NeighborSummaryModal", () => {
  const mockState = {
    user: {
      authCred: {
        uid: "Test Uid",
      },
    },
    popup: {
      isNeighborSummaryOpen: false,
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
            <NeighborSummaryModal />
          </Router>
        </Provider>
      )
      .toJSON();
  });

  it("renders NeighborSummaryModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
