import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import SuggestionInput from "./SuggestionInput";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "../Shared/Api";
import ButtonLoader from "../Helper/ButtonLoader/ButtonLoader";
class Domestic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      loading: false
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }
  handleSubmit = event => {
    this.setState({
      loading: true
    });
    let sourceCode = document.getElementById("DOM_SourceCityCode").value,
      destinationCode = document.getElementById("DOM_DestinationCityCode")
        .value,
      departDate = document.getElementById("DOM_DepartDate_Str").value,
      arrivalDate = document.getElementById("DOM_ReturnDate_Str").value;

    event.preventDefault();

    const searchValues = {
      tripMode: 2,
      FlightType: 1,
      UserId: null,
      ADT: 1,
      CHD: 0,
      INF: 0,
      CabinType: 1,
      AirLineList: null,
      DestinationInformationList: [
        {
          DepartureDate: departDate,
          OriginLocationAllAirport: false,
          OriginLocationAirPortCode: sourceCode,
          OriginLocationCityCode: sourceCode,
          DestinationLocationAllAirport: false,
          DestinationLocationAirPortCode: destinationCode,
          DestinationLocationCityCode: destinationCode,
          Index: 1
        },
        {
          DepartureDate: arrivalDate,
          OriginLocationAllAirport: false,
          OriginLocationAirPortCode: destinationCode,
          OriginLocationCityCode: destinationCode,
          DestinationLocationAllAirport: false,
          DestinationLocationAirPortCode: sourceCode,
          DestinationLocationCityCode: sourceCode,
          Index: 2
        }
      ]
    };
    const data = {
      ValueObject: JSON.stringify(searchValues)
    };
    axios({
      method: "post",
      url: "SearchFlight",
      data: data
    }).then(function(res) {
      window.location.assign(
        "/Flight/" + sourceCode + "/" + destinationCode + "/" + res.data
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h1 className="lead text-center">
            خرید اینترنتی بلیط هواپیما، قطار و رزرو هتل
          </h1>
          <div className="card shadow-sm p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <SuggestionInput
                    id="DOM_SourceCityName"
                    name="DOM_SourceCityName"
                    labelText="از"
                    placeholder="شهر مبدا را وارد کنید"
                    hiddenName="DOM_SourceCityCode"
                    apiUrl="CityList/?value"
                    iconType="plane"
                  />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <SuggestionInput
                      id="DOM_DestinationCityName"
                      name="DOM_DestinationCityName"
                      labelText="به"
                      placeholder="شهر مقصد را وارد کنید"
                      hiddenName="DOM_DestinationCityCode"
                      apiUrl="CityList/?value"
                      iconType="plane"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label
                      htmlFor="DOM_DepartDate_Str"
                      className="text-right d-block font-weight-bold"
                    >
                      تاریخ رفت
                    </label>
                    <DatePicker
                      autoComplete="off"
                      className="form-control flightio-input"
                      id="DOM_DepartDate_Str"
                      placeholderText="انتخاب کنید"
                      minDate={moment()}
                      maxDate={moment().add(365, "days")}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeStart}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label
                      htmlFor="DOM_ReturnDate_Str"
                      className="text-right d-block font-weight-bold"
                    >
                      تاریخ برگشت
                    </label>
                    <DatePicker
                      autoComplete="off"
                      className="form-control flightio-input"
                      id="DOM_ReturnDate_Str"
                      placeholderText="انتخاب کنید"
                      minDate={this.state.startDate}
                      maxDate={moment().add(365, "days")}
                      peekNextMonth
                      showMonthDropdown
                      showYearDropdown
                      dropdownMode="select"
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeEnd}
                    />
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6">
                  <div className="form-group">
                    <label
                      htmlFor="DOM_DestinationCityName"
                      className="text-right d-block font-weight-bold"
                    >
                      تعداد مسافران
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="DOM_DestinationCityName"
                      aria-describedby="emailHelp"
                      placeholder="انتخاب کنید"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <ButtonLoader
                    classes="btn btn-flightio mt-4 px-5 py-2"
                    text="جستجو"
                    type="submit"
                    iconSize="small"
                    iconName="search"
                    iconColor="#ffffff"
                    loading={this.state.loading}
                    LoadingWidth="24px"
                    LoadingHeight="24px"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Domestic;
