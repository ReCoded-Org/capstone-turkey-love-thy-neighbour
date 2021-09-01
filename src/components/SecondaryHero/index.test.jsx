import React from "react";
import renderer from "react-test-renderer";
import SecondaryHero from ".";

describe("SecondaryHero Page", () =>
  it("renders SecondaryHero Page correctly", () => {
    const tree = renderer.create(<SecondaryHero />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
