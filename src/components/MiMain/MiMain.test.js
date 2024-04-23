import React from "react";
import { shallow } from "enzyme";
import MiMain from "./MiMain";

describe("MiMain", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MiMain />);
    expect(wrapper).toMatchSnapshot();
  });
});
