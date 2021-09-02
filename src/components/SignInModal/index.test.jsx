// NOT WORKING

import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import SignInModal from ".";

describe("SignInModal", () => {
  const mockState = {
    user: {
      firestoreDoc: {
        isSignedIn: false,
      },
      authCred: {
        user: {
          uid: "cLAjww6Xz5QjQTqy4Yvw1DypaHg1",
        },
      },
    },
    popup: {
      isSignedIn: false,
      // alagavat: "false", even this is working wth ?!
      /* When we pass "isEditProfileOpen, the test runs correctly, but it doesnt work with "isSignInOpen" */
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
          <SignInModal />
        </Provider>
      )
      .toJSON();
  });

  it("renders SignInModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
