import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#19274e",
    },
    secondary: {
      main: "#b49b85",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
  },
});

theme = responsiveFontSizes(theme);
export default theme;
