import actionTypes from "./types";
import { combineReducers } from "redux";

const UNSPLASH_STATE = {
  unsplash: null,
  tags: [
    "Dog",
    "Cat",
    "Space",
    "Nature",
    "Business",
    "Office",
    "Coffee",
    "World",
    "Wildlife",
    "Beach",
    "Digital",
    "Meeting",
    "Cars",
    "Games",
    "Holiday",
  ],
  currentQuery: "Book",
  page: 1,
  collection: [],
  totalPages: 0,
  randomImageUrl: "",
  userImageSelection: null,
};

export function unsplashReducer(state = UNSPLASH_STATE, action) {
  switch (action.type) {
    case actionTypes.UNSPLASH_INITIALISED:
      return {
        ...state,
        unsplash: action.payload,
      };
    case actionTypes.ON_PAGE_LOAD:
      return {
        ...state,
        collection: [...action.payload.results],
        totalPages: action.payload.total_pages,
        page: 1,
      };

    case actionTypes.SEARCH_QUERY_CHANGED:
      return {
        ...state,

        collection: [...action.payload.results],
        page: 1,
        totalPages: action.payload.total_pages,
        currentQuery: action.query,
      };

    case actionTypes.LOAD_MORE_DATA:
      if (state.page < state.totalPages)
        return {
          ...state,
          page: state.page + 1,
          collection: [...state.collection, ...action.payload.results],
        };
      break;
    case actionTypes.RANDOM_IMAGE_TRIGGER:
      return {
        ...state,
        randomImageUrl: action.payload,
      };

    case actionTypes.USER_CLICKS_IMAGE:
      return {
        ...state,
        userImageSelection: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  unsplashReducer,
});

export default rootReducer;
