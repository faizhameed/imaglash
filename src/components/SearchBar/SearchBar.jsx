import React from "react";
import SearchIcon from "../../assets/svgs/search.svg";

import { connect } from "react-redux";
import { changeSearchQuery } from "../../redux/actions";

import "./SearchBar.scss";

const SearchBar = ({ tags, changeSearchQuery }) => {
  let inputQuery = React.createRef();
  const handleSearch = () => {
    if (inputQuery.current.value) changeSearchQuery(inputQuery.current.value);
  };
  return (
    <div>
      <div className="tag-container">
        <h4>Search by Tags:</h4>
        {tags.map((tag, i) => (
          <p onClick={() => changeSearchQuery(tag)} key={i}>
            {tag}
          </p>
        ))}
      </div>
      <div className="inp-btn-cont">
        <input
          ref={inputQuery}
          className="search-input"
          type="text"
          placeholder="Search for images here..."
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button className="icon-btn" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ unsplashReducer: { tags } }) => ({
  tags,
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchQuery: (data) => dispatch(changeSearchQuery(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
