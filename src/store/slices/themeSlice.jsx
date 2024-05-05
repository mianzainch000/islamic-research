
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  isDark: false,
};

export const counterSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setIsDarkTheme: (state, action) => {
      return {
        ...state,
        isDark: action.payload,
      };
    },
  },
});

export const { setIsDarkTheme } = counterSlice.actions;
export default counterSlice.reducer;
