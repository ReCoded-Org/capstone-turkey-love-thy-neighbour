import React from "react";
import renderer from "react-test-renderer";
import SocialProof from ".";

describe("SocialProof Page", () =>
  it("renders SocialProof Page correctly", () => {
    const tree = renderer.create(<SocialProof />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
