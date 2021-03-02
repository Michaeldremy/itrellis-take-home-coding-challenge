import * as React from "react";
import { mount, shallow } from "enzyme";
import CarForm from "../Form/CarForm";
import { useEnzymeAdapter } from "../Hooks/useEnzymeAdapter";
import { Header } from "semantic-ui-react";

useEnzymeAdapter();

describe("Testing the CarForm component", () => {
  // const setState = jest.fn();
  // const useStateSpy = jest.spyOn(React, "useState");
  // useStateSpy.mockImplementation((init) => [init, setState]);
  it("Checks to ensure the first header is the right text", () => {
    const wrapper = mount(<CarForm />);
    expect(wrapper.find(Header).first().text()).toEqual(
      "What type of car are you looking for?"
    );
  });

  it("Should change value when onChange is called", () => {
    const wrapper = mount(<CarForm />).find("form");
    wrapper.find("select").simulate("change", { target: { value: "Red" } });
  });

  it("Testing if checkbox's are working", () => {
    const wrapper = mount(<CarForm />).find("form");
    wrapper.find('input').at(1).simulate('change', { target: { checked: false } })
  });
});
