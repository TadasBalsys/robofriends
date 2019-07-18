import { shallow, mount, render } from "enzyme";
import React from "react";
import Card from "./Card";

// const {shallow} = require('enzyme');
// const Card = require('../components/Card');
// const React = require('react');

console.log("This line is from Card.test.js file");

console.log(shallow(<Card/>));

it("should ", () => {
  expect(42).toBe(42);
});

// it("expect to render Card component", () => {
// //   expect(shallow(<Card />).length).toEqual(1);
// });
