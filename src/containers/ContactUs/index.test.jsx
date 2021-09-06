import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import ContactUs from ".";

describe("ContactUs", () => {
  const mockState = {
    popup: {
      isEmailSentOpen: true,
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
          <ContactUs />
        </Provider>
      )
      .toJSON();
  });

  it("renders ContactUs correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
