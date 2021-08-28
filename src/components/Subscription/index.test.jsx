import React from "react";
import renderer from "react-test-renderer";
import Subscription from ".";

it("renders correctly", () => {
  const tree = renderer.create(<Subscription />).toJSON();
  expect(tree).toMatchSnapshot();
});
