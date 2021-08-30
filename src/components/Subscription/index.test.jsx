import React from "react";
import renderer from "react-test-renderer";
import Subscription from ".";

describe("Subscription Section", () =>
  it("renders Subscription section correctly", () => {
    const tree = renderer.create(<Subscription />).toJSON();
    expect(tree).toMatchSnapshot();
  }));
