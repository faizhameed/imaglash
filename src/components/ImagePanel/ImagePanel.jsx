import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toJson } from "unsplash-js";
import "./ImagePanel.scss";

const ImagePanel = ({ unsplash }) => {
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    console.log(unsplash);
    if (unsplash)
      unsplash.search
        .photos("book", 1, 10, { orientation: "portrait" })
        .then(toJson)
        .then((json) => {
          setCollection(() => json.results);
        });
  }, [unsplash]);

  return (
    <div className="image-container">
      {collection.length !== 0
        ? collection.map((item) => (
            <div className="image-element" key={item.id}>
              <img src={item.urls.thumb} alt={item.alt_description} />
            </div>
          ))
        : null}
    </div>
  );
};

const mapStateToProps = ({ unsplashReducer: { unsplash } }) => ({
  unsplash,
});

export default connect(mapStateToProps)(ImagePanel);
