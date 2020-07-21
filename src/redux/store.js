import { createStore } from "redux";
import rootReducer from "./reducer";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
/**
 * we are creating global store and using the store in our root file to have
 * all components to access it
 *
 */

const middlewares = [thunkMiddleware];
/**
 * we need not run logger in production mode since it can show the state to users.
 * To improve security of out application we should only run logger in development mode
 */
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
