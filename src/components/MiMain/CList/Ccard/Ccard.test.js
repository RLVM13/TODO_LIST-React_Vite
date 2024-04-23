import React from "react";
import { shallow } from "enzyme";
import Ccard from "./Ccard";

describe("Ccard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ccard />);
    expect(wrapper).toMatchSnapshot();
  });
});
