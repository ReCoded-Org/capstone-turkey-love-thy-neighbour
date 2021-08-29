import React from "react";
// eslint-disable-next-line import/no-unresolved
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
