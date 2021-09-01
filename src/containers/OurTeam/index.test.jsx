import React from "react";
import renderer from "react-test-renderer";
import OurTeam from ".";

describe("OurTeam Page", () =>
  it("renders OurTeam Page correctly", () => {
    const tree = renderer.create(<OurTeam />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
