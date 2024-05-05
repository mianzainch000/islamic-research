"use client";
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      //white
      main: "rgba(255, 255, 255, 1)",
      //screenBg
      dark: "#FFF",
      //black
      contrastText: "rgba(12, 12, 12, 1)",
      //placeholdercolor
      light: "rgba(99, 93, 93, 1)",
    },
    secondary: {
      main: "#6c757d",
      //cardBg
      contrastText: "rgba(247, 247, 247, 1)",
      //error - red
      dark: "red",
      // textCOlor
      light: "black",
    },

    //gradient
    gradient: {
      main: "linear-gradient(-45deg, rgba(12, 12, 12, 1), rgba(12, 12, 12, 1))",
      // mainChannel: "0 0 0",
      // light: "linear-gradient(135deg, #4aaffd 0%, #4992f8 100%)",
      // lightChannel: "0 0 0",
      // dark: "linear-gradient(135deg, #4cc2ff 0%, #4aa0fa 100%)",
      // darkChannel: "0 0 0",
      // contrastText: "#fff",
      // contrastTextChannel: "0 0 0",
    },

    // Add more color options as needed
  },


});
export const darkTheme = createTheme({
  palette: {
    primary: {
      //white
      main: "rgba(255, 255, 255, 1)",
      //screenBg
      dark: "#000000",
      //black
      contrastText: "rgba(12, 12, 12, 1)",
      //placeholdercolor
      light: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      main: "#6c757d",
      //cardBg
      contrastText: "rgba(43, 46, 50, 1)",
      //error - red
      dark: "red",
      // textCOlor
      light: "white",
    },

    //gradient
    gradient: {
      main: "linear-gradient(-45deg, rgba(12, 12, 12, 1), rgba(12, 12, 12, 1))",
      // mainChannel: "0 0 0",
      // light: "linear-gradient(135deg, #4aaffd 0%, #4992f8 100%)",
      // lightChannel: "0 0 0",
      // dark: "linear-gradient(135deg, #4cc2ff 0%, #4aa0fa 100%)",
      // darkChannel: "0 0 0",
      // contrastText: "#fff",
      // contrastTextChannel: "0 0 0",
    },

    // Add more color options as needed
  },
  
 
});



export default theme;
