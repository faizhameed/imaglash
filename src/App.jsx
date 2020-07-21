import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import ImageView from "./pages/ImageView/ImageView";
import Unsplash, { toJson } from "unsplash-js";
import { connect } from "react-redux";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchUnsplash } from "./redux/actions";

function App({ fetchUnsplash }) {
  useEffect(() => {
    fetchUnsplash();
  }, []);
  return (
    <Router>
      <div className="App">
        <Route path="/image-view">
          <ImageView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchUnsplash: () => dispatch(fetchUnsplash()),
});

export default connect(null, mapDispatchToProps)(App);
