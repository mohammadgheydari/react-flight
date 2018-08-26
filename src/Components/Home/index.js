import React, { Component } from "react";
import Domestic from "./DomesticSearchBox";
import "./index.css";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Domestic />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
