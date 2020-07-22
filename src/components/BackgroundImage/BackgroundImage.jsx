import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getRandomImage } from "../../redux/actions";

const BackgroundImage = ({ randomImageUrl, getRandomImage }) => {
  useEffect(() => {
    getRandomImage();
  }, [getRandomImage]);
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
      url(${randomImageUrl}) no-repeat center, linear-gradient(#4e4376, #2b5876);
    background-size: cover;
  `;
  return <Div />;
};
const mapStateToProps = ({ unsplashReducer: { randomImageUrl } }) => ({
  randomImageUrl,
});

const mapDispatchToProps = (dispatch) => ({
  getRandomImage: () => dispatch(getRandomImage()),
});
export default connect(mapStateToProps, mapDispatchToProps)(BackgroundImage);
