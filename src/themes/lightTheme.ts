import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#D1E8E2",
    },
    background: {
      default: "#212121",
    },
    text: {
      primary: "#ececec",
      secondary: "#ffCB91",
      disabled: "#8e918f",
    },
  },
});

export default lightTheme;
