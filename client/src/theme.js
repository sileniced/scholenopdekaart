import { createMuiTheme } from "@material-ui/core/styles";
import { blue, green, orange, purple, red } from "@material-ui/core/colors";

export const comparisonColors = [red, orange, green, blue, purple];

console.log("comparisonColors = ", comparisonColors);

export const theme = createMuiTheme({
  comparisonColors,

  comparisonHeaders: {
    color: red[500]
  },

  palette: {
    background: {
      paper: "white",
      default: "#641C5C",
      secondary: "#5AD09B"
    },
    primary: {
      main: "#641C5C"
    },
    secondary: {
      main: "#5AD09B"
    },
    error: red,
    // Used by `getContrastText()` to maximize th,e contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Proxima Nova",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});
