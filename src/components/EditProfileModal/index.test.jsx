import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import EditProfileModal from ".";

describe("EditProfileModal", () => {
  const data = {
    showModal: true,
  };
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
        interests: [{ content: "something" }],
        number: 25,
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
      isEditProfileOpen: true,
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
          <EditProfileModal showModal={data.showModal} />
        </Provider>
      )
      .toJSON();
  });

  it("renders EditProfileModal correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
