// NOT WORKING

import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Neighbors from ".";

describe("Neighbors Page", () => {
    const mockState = {
        user: {
            firestoreDoc: {
                firstName: "Test Name",
                lastName: "Test Name",
                email: "Test Email",
                district: ["ADistrict"],
            }
        },
        popup: {
            isNeighborSummaryOpen: false,
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
                    <Neighbors />
                </Provider>
            )
            .toJSON();
    });

    it("renders Neighbors correctly", () => {
        expect(tree).toMatchSnapshot();
    });
});
