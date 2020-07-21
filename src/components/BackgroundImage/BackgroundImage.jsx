import React, { useState, useEffect } from "react";
import "./BackgroundImage.scss";
import styled from "styled-components";

const BackgroundImage = () => {
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1495464101292-552d0b52fe41?auto=format&fit=crop&w=1350&q=80"
  );
  useEffect(() => {}, []);
  const Div = styled.div`
    content: "";
    display: block;
    position: fixed;
    left: 0;
    bottom: 7em;
    width: 100%;
    height: calc(var(--heading-height) + 10em);
    z-index: -1;
    transform: skewY(-12.5deg);
    border-bottom: 0.2em solid #fff;
    box-shadow: -1px -7px 20px 0px black;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${imageUrl}) no-repeat center, linear-gradient(#4e4376, #2b5876);
    background-size: cover;
  `;
  return <Div />;
};

export default BackgroundImage;
