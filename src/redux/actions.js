import actionTypes from "./types";

import Unsplash, { toJson } from "unsplash-js";

export const fetchUnsplash = () => {
  const unsplash = new Unsplash({
    accessKey: "C6bzEnmvODyk9wJ3ig0V4E7p9pwGVkZNejOftxLLdVI",
  });

  return { type: actionTypes.UNSPLASH_PROMISE_SUCCESS, payload: unsplash };
};

export const testing = () => ({
  type: "TEST",
  payload: "TESTED SUCESS",
});
