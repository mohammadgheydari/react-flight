import React, { Component } from "react";
import axios from "axios";
import "../Shared/Api";
var md5 = require("md5");
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    redirectToReferrer: false
  };
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleLogin() {
    this.setState({ redirectToReferrer: true });
  }
  handleSubmit(event) {
    event.preventDefault();
    let UserName = document.getElementById("email").value,
      Password = document.getElementById("password").value,
      hashPass = md5(Password);
    axios({
      method: "get",
      // url: "AccountLogin/?value={'UserName:'" + UserName + "',Password:'"+Password+"}"
      url:
        'AccountLogin/?value={"UserName":"' +
        UserName +
        '","Password":"' +
        hashPass +
        '","B2BLogin":false}'
    }).then(function(res) {
      console.log(res.data);
      if (res.data.Status === 1) {
        localStorage.removeItem("userInfoName");
        localStorage.setItem("userInfoName", res.data.CurrentUserInfo.Name);
        console.log(localStorage.getItem("userInfoName"));
        handleLogin();
      }
    });
  }

  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <div className="container">
        <div className="Login row justify-content-md-center">
          <div className="col-xs-12 col-md-5">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label
                  htmlFor="email"
                  class="text-right d-block font-weight-bold"
                >
                  ایمیل
                </label>
                <input
                  type="email"
                  className="form-control flightio-input"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder="آدرس ایمیل را وارد کنید"
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="password"
                  class="text-right d-block font-weight-bold"
                >
                  کلمه عبور
                </label>
                <input
                  type="password"
                  className="form-control flightio-input"
                  value={this.state.password}
                  onChange={this.handleChange}
                  name="password"
                  id="password"
                  placeholder="کلمه عبور خود را وارد کنید"
                />
              </div>

              <button
                class="btn btn-flightio mt-4 px-5 py-2 buttonLoader"
                type="submit"
              >
                ورود
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
