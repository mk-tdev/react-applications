// import ReactShallowRenderer from "react-test-renderer/shallow";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import Header from "../../components/Header";
test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // expect(wrapper.find("span").length).toBe(1);
  // expect(wrapper.find("span").text()).toBe("Expensify");
});

// test("should render header properly", () => {
//   const renderer = new ReactShallowRenderer();

//   renderer.render(<Header />);

//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
