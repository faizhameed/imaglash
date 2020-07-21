import React, { useEffect } from "react";
import Button from "../Button/Button";

import { updatePageNumber, setCollection } from "../../redux/actions";
import { connect } from "react-redux";

import "./ImagePanel.scss";

const ImagePanel = ({
  updatePageNumber,
  collection,
  setCollection,
  page,
  currentQuery,
}) => {
  useEffect(() => {
    setCollection();
  }, [setCollection]);

  return (
    <React.Fragment>
      <div className="image-container">
        {collection.length !== 0
          ? collection.map((item) => (
              <div className="image-element" key={item.id}>
                <img src={item.urls.small} alt={item.alt_description} />
              </div>
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
});
export default connect(mapStateToProps, mapDispatchToProps)(ImagePanel);
