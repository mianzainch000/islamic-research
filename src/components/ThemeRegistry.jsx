"use client";
import * as React from "react";
import { useSelector } from "react-redux";
import theme, { darkTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeRegistry({ children }) {
  const isDarkTheme = useSelector((state) => state.theme.isDark);
  console.log({ isDarkTheme });
  React.useEffect(() => {
    if (isDarkTheme) {
      document.body.style.backgroundColor = "#03060B";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
