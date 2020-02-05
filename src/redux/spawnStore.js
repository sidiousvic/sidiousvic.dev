import { createStore as reduxCreateStore, combineReducers } from "redux";
import * as reducers from "./reducers";
const combinedReducers = combineReducers({ ...reducers });
const spawnStore = () => reduxCreateStore(combinedReducers, {});
export default spawnStore;
