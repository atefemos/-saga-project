import { createStore, compose } from "redux";
import rootReducer from "./reducers/index.js";

const store = compose(window.devToolsExtention && window.devToolsExtension())(
  createStore
)(rootReducer);
export default store;
