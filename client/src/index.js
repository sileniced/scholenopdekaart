import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { Provider } from "react-redux";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
// import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';


import {theme} from "./theme";
import App from "./App";
import store from "./store";



ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
