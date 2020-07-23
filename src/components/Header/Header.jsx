import React from "react";
import "./Header.scss";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

const Header = () => {
  return (
    <header>
      <BackgroundImage />
      <h1>
        Imag
        <span className="sec-color">lash</span>
      </h1>
      <h2>Free stock photos for everything</h2>
      <p>We offer the best free stock photos all in one place</p>
    </header>
  );
};

export default Header;
