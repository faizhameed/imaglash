import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { shallow } from "enzyme";
describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
  it("expect to render App", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
