import { shallow } from "enzyme";
import React from "react";
import ImageView from "./ImageView";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Image View Page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ImageView />
      </Provider>
    );
  });
  it("expect to render Image View", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
