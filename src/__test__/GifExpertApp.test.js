import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Probando el componente", () => {
  let wrapper = shallow(<GifExpertApp />);
  beforeEach(() => {
    //Reinicia el componente con dada prueba
    wrapper = shallow(<GifExpertApp />);
  });

  test("1- Debe mostrar <ConunterApp/> correctamente ", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
