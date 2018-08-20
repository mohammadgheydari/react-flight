import React, { Component } from "react";
import Shared from "./Components/Shared/Layout";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

// Material UI Custom
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();
const theme = createMuiTheme({
  typography: {
    fontFamily: ["IRANSans", "Arial", "sans-serif"].join(",")
  },
  direction: "rtl"
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <JssProvider jss={jss} generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme}>
            <Shared />
          </MuiThemeProvider>
        </JssProvider>
      </React.Fragment>
    );
  }
}

export default App;
