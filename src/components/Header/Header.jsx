import React from "react";
import "./Header.scss";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

const Header = () => {
  return (
    <header>
      <BackgroundImage />
      <h1>
        Imag
        <span className="sec-color">LASH</span>
      </h1>
    </header>
  );
};

export default Header;
