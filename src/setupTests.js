// configurations for Enzyme - test library from official documentation
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ Adapter: new Adapter() });

// configurations for Enzyme from Udemy course "The Complete Junior to Senior Web Developer RoadMap" lecture 147.
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
