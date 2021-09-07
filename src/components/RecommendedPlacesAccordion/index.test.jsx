import React from "react";
import renderer from "react-test-renderer";
import RecommendedPlacesAccordion from ".";

describe("RecommendedPlacesAccordion page", () => {
  const data = {
    district: "KADIKÖY",
  };

  let tree;

  beforeEach(() => {
    tree = renderer
      .create(<RecommendedPlacesAccordion district={data.district} />)
      .toJSON();
  });

  it("renders RecommendedPlacesAccordion page correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
