import { shallow, mount, render2 } from "enzyme";
import React from "react";
import Card from "./Card";

console.log(shallow(<Card />));

it("should ", () => {
  expect(42).toBe(42);
});

it("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});

it('expect to render Card component', () => {
 expect(shallow(<Card />)).toMatchSnapshot();
});