import React from "react";
import { connect } from "react-redux";

import "./Footer.scss";
import { changeSearchQuery } from "../../redux/actions";

const Footer = ({ tags, changeSearchQuery }) => {
  return (
    <footer>
      <div className="App cent-pos">
        <div className="footer-container">
          <h3>
            Imag
            <span className="sec-color">lash</span>
          </h3>
          <div className="tag-container">
            <h4>Popular Searches</h4>
            {tags.map((tag) => (
              <p key={tag} onClick={() => changeSearchQuery(tag)}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
const mapStateToProps = ({ unsplashReducer: { tags } }) => ({
  tags,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchQuery: (query) => dispatch(changeSearchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
