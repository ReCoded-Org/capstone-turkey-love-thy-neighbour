// NOT WORKING

import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { validateYupSchema } from "formik";
import SignUpModal from ".";

describe("SignUpModal", () => {
  const mockState = {
    popup: {
      isSignUpOpen: false,
      /* When we pass "isEditProfileOpen, the test runs correctly, but it doesnt work with "isSignUpOpen" */

      //   But when we pass false as the value, it works for some reason
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
          <SignUpModal />
        </Provider>
      )
      .toJSON();
  });

  it("renders SignUpModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
