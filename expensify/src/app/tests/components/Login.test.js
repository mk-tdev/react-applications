import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });

import { Login } from "../../components/Login";

test("should render NotFound", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});
