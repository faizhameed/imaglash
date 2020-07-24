import actionTypes from "./types.js";
import { unsplashReducer } from "./reducer";

describe("Unsplash intialisation", () => {
  const INITIAL_STATE = {
    unsplash: null,
    tags: ["Dog", "Cat", "Space"],
    currentQuery: "Book",
    page: 1,
    collection: [],
    totalPages: 0,
    randomImageUrl: "",
    userImageSelection: null,
  };
  it("should return intial state", () => {
    expect(unsplashReducer(INITIAL_STATE, {})).toEqual(INITIAL_STATE);
  });

  it("should update search query", () => {
    expect(
      unsplashReducer(INITIAL_STATE, {
        type: actionTypes.SEARCH_QUERY_CHANGED,
        payload: {
          results: [1, 2, 3, 4],
          total_pages: 100,
        },
        query: "Cat",
      })
    ).toEqual({
      unsplash: null,
      tags: ["Dog", "Cat", "Space"],
      currentQuery: "Cat",
      page: 1,
      collection: [1, 2, 3, 4],
      totalPages: 100,
      randomImageUrl: "",
      userImageSelection: null,
    });
  });
  const IMAGE_PRE_LOADED = {
    unsplash: null,
    tags: ["Dog", "Cat", "Space"],
    currentQuery: "Book",
    page: 1,
    collection: [1, 2, 3, 4],
    totalPages: 10,
    randomImageUrl: "",
    userImageSelection: null,
  };
  it("should load more data on same query", () => {
    expect(
      unsplashReducer(IMAGE_PRE_LOADED, {
        type: actionTypes.LOAD_MORE_DATA,
        payload: {
          results: [5, 6, 7],
        },
      })
    ).toEqual({
      unsplash: null,
      tags: ["Dog", "Cat", "Space"],
      currentQuery: "Book",
      page: 2,
      collection: [1, 2, 3, 4, 5, 6, 7],
      totalPages: 10,
      randomImageUrl: "",
      userImageSelection: null,
    });
  });
});
