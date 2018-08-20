import React, { Component } from "react";
import Logo from "../../../logo.png";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={Logo} width="180px" alt="flightio-logo" />
            </a>
          </nav>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
