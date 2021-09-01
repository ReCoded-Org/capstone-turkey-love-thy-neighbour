import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from ".";

describe("Footer Section", () =>
  it("renders Footer section correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Footer />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  }));
