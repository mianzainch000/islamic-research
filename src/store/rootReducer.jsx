/*
 * combines all th existing reducers
 */

import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "../../src/store/slices/themeSlice";


const reducers = {
  theme: themeSlice

};

// Exports

const rootReducer = combineReducers(reducers);
// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
