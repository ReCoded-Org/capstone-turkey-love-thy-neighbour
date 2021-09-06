import React from "react";
import ReactDOM from "react-dom";
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
          uid: "",
        },
      },
    },
    popup: {
      isSignedInOpen: true,
    },
  };

  const mockStore = configureStore();
  let store;
  let tree;

  beforeEach(() => {
    store = mockStore(mockState);

    ReactDOM.createPortal = jest.fn((element) => {
      return element;
    });

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
