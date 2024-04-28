import { combineReducers } from "redux";
import allTartesReducer from "./allTartesReducer";
import tarteReducer from "./tarteReducer";

export const reducers = combineReducers({
    allTartesReducer,
    tarteReducer
})