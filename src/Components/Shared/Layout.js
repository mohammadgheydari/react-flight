import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Routing from "./Routing";
class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routing />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
