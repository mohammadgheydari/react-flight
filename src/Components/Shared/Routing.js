import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import FlightResult from "../FlightResult";
import NoMatch from "../Error/404";
import Login from "../Account/Login";

const checkAuth = () => {
  const token = localStorage.getItem("userInfoName");
  if (!token) {
    return false;
  }
  return true;
};
// const logOut = () => {
//   localStorage.removeItem("userInfoName");
// };
// const AuthButton = withRouter(
//   ({ history }) =>
//     checkAuth() ? (
//       <p>
//         خوش آمدید،
//         <button className="btn btn-sm btn-danger" onClick={logOut()}>
//           خروج
//         </button>
//       </p>
//     ) : (
//       <p>شما وارد سامانه نشده اید</p>
//     )
// );

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class Routing extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <AuthButton /> */}
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route
            path="/Flight/:source/:destination/:id"
            component={FlightResult}
            exact
          />
          <Route path="/login" component={Login} exact />
          {/* <PrivateRoute path="/protected" component={Contact}/> */}
          <AuthRoute path="/protected" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
