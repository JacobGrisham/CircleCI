import React from "react";
import { shallow } from "enzyme";
import CounterButton2 from "./CounterButton2";

it("renders without crashing", () => {
  expect(shallow(<CounterButton2 />)).toMatchSnapshot();
});

it("correnctly increments the counter", () => {
  const wrapper = shallow(<CounterButton2 />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 3 });
});
