import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    setIsDarkTheme: (state, action) => {
      state.isDark = action.payload;
    },
  },
});

export const { setIsDarkTheme } = themeSlice.actions;
export default themeSlice.reducer;
