import actionTypes from "./types";
import { unsplash } from "../utils/common";
import { toJson } from "unsplash-js";

export const changeSearchQuery = (query) => {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SEARCH_QUERY_CHANGED,
      payload: {
        results: [],
        query: "",
      },
    });
    if (unsplash) {
      unsplash.search
        .photos(query, 1, 9)
        .then(toJson)
        .then((json) => {
          dispatch({
            type: actionTypes.SEARCH_QUERY_CHANGED,
            payload: json,
            query: query,
          });
        });
    }
  };
};

export const updatePageNumber = (page, query) => {
  return function (dispatch) {
    if (unsplash) {
      unsplash.search
        .photos(query, page + 1, 9)
        .then(toJson)
        .then((json) => {
          dispatch({
            type: actionTypes.LOAD_MORE_DATA,
            payload: json,
            query,
          });
        });
    }
  };
};

export const setCollection = () => {
  return function (dispatch) {
    if (unsplash) {
      unsplash.search
        .photos("book", 1, 9)
        .then(toJson)
        .then((json) => {
          dispatch({
            type: actionTypes.ON_PAGE_LOAD,
            payload: json,
          });
        });
    }
  };
};

export const getRandomImage = () => {
  return function (dispatch) {
    unsplash.photos
      .getRandomPhoto({ query: "nature" })
      .then(toJson)
      .then((json) => {
        dispatch({
          type: actionTypes.RANDOM_IMAGE_TRIGGER,
          payload: json.urls.regular,
        });
      });
  };
};

export const userSelectImage = (data) => ({
  type: actionTypes.USER_CLICKS_IMAGE,
  payload: data,
});
