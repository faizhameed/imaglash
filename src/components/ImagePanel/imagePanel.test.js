import React from "react";
import { shallow } from "enzyme";
import ImagePanel from "./ImagePanel";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Image Panel Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ImagePanel />
      </Provider>
    );
  });
  it("expect to render Image panel", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
