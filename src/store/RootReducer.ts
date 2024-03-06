
import { combineReducers } from "@reduxjs/toolkit";
import submarineReducer from "@/store/slices/SubmarineSlice";

export const rootReducer = combineReducers({
  submarine: submarineReducer,
});