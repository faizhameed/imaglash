import React from "react";
import "./ImageView.scss";
import { Link } from "react-router-dom";

const ImageView = () => {
  return (
    <div className="wrapper">
      <div className="img-view-container">
        <h2>Image Detail view</h2>
        <Link className="back-hm" to="/">
          X
        </Link>
      </div>
    </div>
  );
};

export default ImageView;
