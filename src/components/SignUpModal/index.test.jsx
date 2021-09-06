import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import SignUpModal from ".";

describe("SignUpModal", () => {
  const mockState = {
    popup: {
      isSignUpOpen: true,
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
          <SignUpModal />
        </Provider>
      )
      .toJSON();
  });

  it("renders SignUpModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
