import React, { Component } from "react";
import Shared from "./Components/Shared/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 700));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const el = document.getElementById("ipl-progress-indicator");
      if (el) {
        // fade out
        el.classList.add("available");
        setTimeout(() => {
          // remove from DOM
          el.outerHTML = "";
        }, 700);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Shared />
      </React.Fragment>
    );
  }
}

export default App;
