import React from "react";
import renderer from "react-test-renderer";
import ContactUS from ".";

describe("ContactUS", () =>
    it("renders ContactUS correctly", () => {
        const tree = renderer.create(<ContactUS />).toJSON();
        expect(tree).toMatchSnapshot();
    }));
