import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import EditProfileModal from ".";

describe("EditProfileModal", () => {
  const mockState = {
    user: {
      firestoreDoc: {
        firstName: "Ali Riza",
        lastName: "Sahin",
        district: "KADIKÖY",
        gender: "Male",
        age: 25,
        education: "High School",
        bio: "I am a freak.",
        interests: [{ content: "Fashion" }, { content: "Coding" }],
        number: "25",
        address: "my address",
        profileImageUrl: "",
        backgroundImageUrl: "",
      },
      authCred: {
        user: {
          uid: "cLAjww6Xz5QjQTqy4Yvw1DypaHg1",
        },
      },
    },
    popup: {
      isEditProfileOpen: false,
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
          <EditProfileModal />
        </Provider>
      )
      .toJSON();
  });

  it("renders EditProfileModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
