import React from "react";
import { shallow } from "enzyme";
import CList from "./CList";

describe("CList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CList />);
    expect(wrapper).toMatchSnapshot();
  });
});
