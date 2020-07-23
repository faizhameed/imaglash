import { shallow } from "enzyme";
import React from "react";

import SearchBar from "./SearchBar";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("SearchBar Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
  });
  it("expect to render Search Bar", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
