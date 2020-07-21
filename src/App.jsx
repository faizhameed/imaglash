import React from "react";
import Home from "./pages/Home/Home";
import ImageView from "./pages/ImageView/ImageView";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
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

export default App;
