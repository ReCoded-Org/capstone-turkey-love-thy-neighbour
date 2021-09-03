import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Home from ".";

describe("Home page", () => {
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
                    email: "Test Email",
                },
            },
        },
        popup: {
            isEditProfileOpen: false,
        }
    };
    const mockStore = configureStore();
    let store;
    let tree;

    beforeEach(() => {
        store = mockStore(mockState);
        tree = renderer
            .create(
                <Provider store={store}>
                    <Home />
                </Provider>
            )
            .toJSON();
    });

    it("renders Home correctly", () => {
        expect(tree).toMatchSnapshot();
    });
});
