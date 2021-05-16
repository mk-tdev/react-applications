import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

import Home from "../../components/Home";

test("should render Home", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
