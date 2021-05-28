import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { Login } from "../../components/Login";

test("should render NotFound", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test("should login when button is clicked", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<Login startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
