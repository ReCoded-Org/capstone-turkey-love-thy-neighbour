import React from "react";
import renderer from "react-test-renderer";
import FAQ from ".";

describe("FAQ", () =>
  it("renders FAQ correctly", () => {
    const tree = renderer.create(<FAQ />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
