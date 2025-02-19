import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#116466",
    },
    secondary: {
      main: "#D1E8E2",
    },
    background: {
      default: "#2c3531",
    },
    text: {
      primary: "#fff",
      secondary: "#ffCB91",
      disabled: "#2c3531",
    },
  },
});

export default lightTheme;
