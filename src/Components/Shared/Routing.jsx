import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home/index";
import About from "../About/index";
import Contact from "../Contact/index";
import FlightResult from "../FlightResult/index";
class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/Flight/:source/:destination/:id"
            component={FlightResult}
            exact
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
