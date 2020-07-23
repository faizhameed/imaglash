import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { downloadImage } from "../../utils/common";

import Button from "../../components/Button/Button";
import CloseIcon from "../../assets/svgs/close.svg";

import "./ImageView.scss";

const ImageView = ({ userImageSelection }) => {
  return (
    <div className="wrapper">
      <div className="img-view-container">
        <Link className="back-hm" to="/">
          <CloseIcon />
        </Link>
        {userImageSelection ? (
          <div className="img-container">
            <div className="user-details">
              <img
                src={userImageSelection.user.profile_image.medium}
                alt={userImageSelection.user.name}
              />
              <h5>{userImageSelection.user.name}</h5>
              <p>
                @
                {userImageSelection.user.twitter_username
                  ? userImageSelection.user.twitter_username
                  : userImageSelection.user.name}
              </p>
            </div>
            <img
              className="selected-image"
              src={userImageSelection.urls.regular}
              alt={userImageSelection.alt_description}
            />
            <Button onClick={() => downloadImage(userImageSelection.urls.raw)}>
              Download
            </Button>
          </div>
        ) : (
          /*
           * Redirect if the route is accessed without any image selected
           */
          <Redirect push to="/" />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ unsplashReducer: { userImageSelection } }) => ({
  userImageSelection,
});

export default connect(mapStateToProps)(ImageView);
