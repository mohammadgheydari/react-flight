import React, { Component } from "react";
import Logo from "../../../logo.png";
class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-white mb-5">
          <a classNameName="navbar-brand" href="/">
            <img src={Logo} width="180px" alt="flightio-logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  درباره ما
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
