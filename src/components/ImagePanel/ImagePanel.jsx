import React, { useEffect } from "react";
import Button from "../Button/Button";

import {
  updatePageNumber,
  setCollection,
  userSelectImage,
} from "../../redux/actions";
import { connect } from "react-redux";

import "./ImagePanel.scss";
import { Link } from "react-router-dom";

const ImagePanel = ({
  updatePageNumber,
  collection,
  setCollection,
  page,
  currentQuery,
  userSelectImage,
}) => {
  useEffect(() => {
    setCollection();
  }, [setCollection]);

  return (
    <React.Fragment>
      <div className="image-container">
        {collection.length !== 0
          ? collection.map((item) => (
              <Link key={item.id} to="/image-view">
                <div
                  className="image-element"
                  onClick={() => userSelectImage(item)}
                >
                  <img src={item.urls.small} alt={item.alt_description} />
                  <div className="user-detail-sm">
                    <img
                      src={item.user.profile_image.medium}
                      alt={item.user.name}
                    />
                    <p>
                      Image By <span>{item.user.name}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          : null}
      </div>
      <Button onClick={() => updatePageNumber(page, currentQuery)}>
        Load More
      </Button>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  unsplashReducer: { collection, page, currentQuery },
}) => ({
  collection,
  page,
  currentQuery,
});

const mapDispatchToProps = (dispatch) => ({
  updatePageNumber: (page, query) => dispatch(updatePageNumber(page, query)),
  setCollection: () => dispatch(setCollection()),
  userSelectImage: (data) => dispatch(userSelectImage(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ImagePanel);
