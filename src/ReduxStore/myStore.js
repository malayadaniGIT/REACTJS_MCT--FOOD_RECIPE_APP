import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducer from "../Reducer/reducer";
import logger from "redux-logger";

const myStore=createStore(reducer,applyMiddleware(logger))
export default myStore