import React from "react";
import renderer from "react-test-renderer";
import FAQ from ".";

describe("FAQ Section", () =>
  it("renders Features section correctly", () => {
    const tree = renderer.create(<FAQ />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
