import React from "react";
import renderer from "react-test-renderer";
import Features from ".";

describe("Features Section", () =>
  it("renders Features section correctly", () => {
    const tree = renderer.create(<Features />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
