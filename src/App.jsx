import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/error-boundary.component";
import Spinner from "./components/Spinner/spinner.component";
import Home from "./pages/Home/Home";
import "./App.scss";

const ImageView = lazy(() => import("./pages/ImageView/ImageView"));

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/image-view">
              <ImageView />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
