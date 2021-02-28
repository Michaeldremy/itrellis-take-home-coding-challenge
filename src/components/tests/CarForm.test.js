import * as React from "react";
import { mount } from "enzyme";
import CarForm from '../Form/CarForm'
import { useEnzymeAdapter } from "../Hooks/useEnzymeAdapter";
import { Header } from "semantic-ui-react";

useEnzymeAdapter();

describe("Testing the CarForm component", () => {
  it("Checks to ensure the first header is the right text", () => {
    const wrapper = mount(<CarForm />);
    expect(wrapper.find(Header).first().text()).toEqual("What type of car are you looking for?");
  })
})