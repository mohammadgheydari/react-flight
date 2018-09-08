import React, { Component } from "react";
import SweetAlert from "sweetalert2-react";
import Checkbox from "../Helper/Checkbox/Checkbox";
import RadioButton from "../Helper/RadioButton/RadioButton";
import Ripple from 'react-material-ripple'
import FlightioTabs from "../Helper/Tabs/Tabs"
import 'react-web-tabs/dist/react-web-tabs.css';

import "./index.css";

class Home extends Component {
  state = {
    show: false
  };
 
  render() {
    return (
      <React.Fragment>
        <main className="container">
        <h1 className="lead text-center">
            خرید اینترنتی بلیط هواپیما، قطار و رزرو هتل
          </h1>
        <FlightioTabs/>
          <button
            className="btn btn-info"
            onClick={() => this.setState({ show: true })}
            >
            پیام
          </button>
          
          <br/>   
            <Ripple className="mt-2" style={{borderRadius: '0.25rem'}}>
            <button className="btn btn-default py-2 px-4">کلیک کنید</button>  
            </Ripple>

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
        
          {/* <div>
          <RangeSlider />
            </div>  */}
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
