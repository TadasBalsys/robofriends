import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

// const wrapper = shallow();

// console.log(wrapper(<CounterButton />));

describe("CounteButton testing", () => {
  it("expect to render CounterButton component", () => {
    const mackColor = "red";
    expect(shallow(<CounterButton color={mackColor} />)).toMatchSnapshot();
  });
  it("correctly increments the counter", () => {
    const mackColor = "red";
    const wrapper = shallow(<CounterButton color={mackColor} />);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count: 1});
    expect(wrapper.props().color).toEqual("red");

  });
});
