import * as React from "react";
import { mount } from "enzyme";
import Homepage from "../Homepage";
import CarForm from '../Form/CarForm'
import { useEnzymeAdapter } from "../Hooks/useEnzymeAdapter";
import { Header } from "semantic-ui-react";

useEnzymeAdapter();

describe("Tests for the car dealership homepage", () => {
  it("Checks welcome header from semantic on homepage", () => {
    const wrapper = mount(<Homepage />);
    expect(wrapper.find(Header).first().text()).toEqual("Welcome to Michael's Car Lot!");
  });

  it("Correctly loading in CarForm component in Homepage", () => {
    const wrapper = mount(<Homepage />);
    expect(wrapper.find(<CarForm />)).toBeTruthy()
  })
});
