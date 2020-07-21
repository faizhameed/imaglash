import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toJson } from "unsplash-js";
import styled from "styled-components";

const BackgroundImage = ({ unsplash }) => {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    if (unsplash)
      unsplash.photos
        .getRandomPhoto({ query: "landscape" })
        .then(toJson)
        .then((json) => {
          setImageUrl(json.urls.regular);
        });
  }, [unsplash]);
  const Div = styled.div`
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 7em;
    width: 100%;
    height: calc(var(--heading-height) + 10em);
    z-index: -1;
    transform: skewY(-12.5deg);
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${imageUrl}) no-repeat center, linear-gradient(#4e4376, #2b5876);
    background-size: cover;
  `;
  return <Div />;
};
const mapStateToProps = ({ unsplashReducer: { unsplash } }) => ({
  unsplash,
});

export default connect(mapStateToProps)(BackgroundImage);
