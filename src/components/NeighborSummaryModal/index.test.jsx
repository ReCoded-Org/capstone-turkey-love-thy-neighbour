import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import NeighborSummaryModal from ".";

describe("NeighborSummaryModal", () => {
  const data = {
    selectedNeighbor: {
      firstName: "Test Name",
      lastName: "Test Name",
      email: "Test Name",
    },
  };
  const mockState = {
    user: {
      authCred: {
        uid: "",
      },
    },
    popup: {
      isNeighborSummaryOpen: true,
    },
  };
  const mockStore = configureStore();
  let store;
  let tree;

  beforeEach(() => {
    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });
    store = mockStore(mockState);
    tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <NeighborSummaryModal selectedNeighbor={data.selectedNeighbor} />
          </Router>
        </Provider>
      )
      .toJSON();
  });

  it("renders NeighborSummaryModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
