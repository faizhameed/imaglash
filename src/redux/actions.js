import actionTypes from "./types";

import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "C6bzEnmvODyk9wJ3ig0V4E7p9pwGVkZNejOftxLLdVI",
});

export const changeSearchQuery = (query) => {
  return function (dispatch) {
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
