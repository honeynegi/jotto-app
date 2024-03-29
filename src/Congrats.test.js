import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../Test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the Congras component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("render without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});
test("render no test when  `success` prop is false", () => {
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
});
test("render non-empty congrats message when `success` props is true", () => {
    const wrapper = setup();
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length()).not.toBe(0)
});
