import actionTypes from "./types";
import { combineReducers } from "redux";

const UNSPLASH_STATE = {
  unsplash: null,
};

function unsplashReducer(state = UNSPLASH_STATE, action) {
  switch (action.type) {
    case actionTypes.UNSPLASH_PROMISE_SUCCESS:
      return {
        ...state,
        unsplash: action.payload,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  unsplashReducer,
});

export default rootReducer;
