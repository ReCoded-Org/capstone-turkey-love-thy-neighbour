import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from ".";

describe("Profile page", () => {
    const mockState = {
        user: {
            firestoreDoc: {
                firstName: "Test User",
                gender: "Test Gender"
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
                    <Profile />
                </Provider>
            )
            .toJSON();
    });

    it("renders Profile correctly", () => {
        expect(tree).toMatchSnapshot();
    });
});
