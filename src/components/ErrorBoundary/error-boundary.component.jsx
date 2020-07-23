import React from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }
  static getDerivedStateFromError(error) {
    //process the error, catch the error ahead of time
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }
  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          {/**
           * Representing a broken page if something happens to the application
           *
           */}
          <ErrorImageContainer imageUrl="http://drive.google.com/uc?export=view&id=1fDIZsC7h9yRaSSlkQXwvAt-FD9suiSb2" />
          <ErrorImageText>Sorry the page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
