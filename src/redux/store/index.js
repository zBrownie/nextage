import { createStore, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const middleWare = [thunk];

const makeStore = (context) =>
  createStore(rootReducer, applyMiddleware(...middleWare));

export const wrapper = createWrapper(makeStore, { debug: true });
