import React, { Component } from "react";
import Domestic from "./DomesticSearchBox";
import SweetAlert from "sweetalert2-react";
import Checkbox from "../Helper/Checkbox/Checkbox";
import RadioButton from "../Helper/RadioButton/RadioButton";
import "./index.css";

class Home extends Component {
  state = {
    show: false
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Domestic />
          <button
            className="btn btn-info"
            onClick={() => this.setState({ show: true })}
          >
            پیام
          </button>
          <SweetAlert
            show={this.state.show}
            title="نمونه اول"
            text="پیام شما با موفقیت نمایش داده شد"
            type="success"
            showCancelButton={true}
            confirmButtonText="اوکی"
            cancelButtonText="بستن"
            onConfirm={() => this.setState({ show: false })}
          />
          <Checkbox checked={true} text="تست 1"  color = "colored" />
          <Checkbox checked={false} text="تست 1" color = "colored" />
          <RadioButton
            text="پرواز داخلی"
            inputId="1"
            inputName="group"
            checked={true}
          />
          <RadioButton inputId="2" text="پرواز خارجی" inputName="group" />
          <RadioButton inputId="3" text="چند مسیره" inputName="group" />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
