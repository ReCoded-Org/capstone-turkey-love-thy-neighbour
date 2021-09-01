import React from "react";
import renderer from "react-test-renderer";
import FAQContent from ".";

describe("FAQContent Section", () =>
  it("renders Features section correctly", () => {
    const tree = renderer.create(<FAQContent />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
