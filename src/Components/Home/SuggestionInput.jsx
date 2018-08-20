import React, { Component } from "react";
import Plane from "@material-ui/icons/AirplanemodeActive";
import axios from "axios";
import "../Shared/Api";

class SuggestionInput extends Component {
  state = {
    cities: [],
    isActive: false
  };
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      heading: "شهرهای پربازدید"
    };
    this.handleSetCity = this.handleSetCity.bind(this);
  }
  componentDidMount() {
    axios.get("CityList/?value={'Name':''}").then(res => {
      let Response = res.data;
      this.setState({ cities: Response });
      if (!Response) {
        this.setState({ heading: "نتیجه ای یافت نشد" });
      }
    });
  }
  handleClick = () => {
    this.setState({
      isActive: true
    });
  };
  handleChange = e => {
    const cityName = e.target.value;
    if (cityName === "") {
      this.setState({ heading: "شهرهای پربازدید" });
    } else {
      this.setState({ heading: "نتایج جستجو" });
    }
    axios.get('CityList/?value={"Name":"' + cityName + '"}').then(res => {
      let Response = res.data;
      this.setState({ cities: Response });
      if (!Response) {
        this.setState({ heading: "نتیجه ای یافت نشد" });
      }
    });
  };

  handleSetCity(e) {
    let cityCode = e.target.getAttribute("citycode"),
      code = e.target.getAttribute("code"),
      label = e.target.getAttribute("label"),
      input = e.target.getAttribute("input");

    document.getElementById(code).value = cityCode;
    document.getElementById(input).value = label;
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render() {
    let SuggestionClass = "suggestionsDropdown ";
    SuggestionClass += this.state.isActive ? "active" : "";
    return (
      <React.Fragment>
        <div className="form-group">
          <label
            htmlFor={this.props.id}
            className="text-right d-block font-weight-bold"
          >
            {this.props.labelText}
          </label>
          <input
            type="text"
            className="form-control"
            id={this.props.id}
            name={this.props.name}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            onClick={() => this.handleClick(this)}
            autoComplete="off"
          />
          <input
            type="hidden"
            name={this.props.hiddenName}
            id={this.props.hiddenName}
          />
        </div>
        <ul className={SuggestionClass}>
          <h3 className="heading">{this.state.heading}</h3>
          {this.state.cities.map(city => {
            return (
              <li
                key={city.CTY_Code}
                citycode={city.CTY_Code}
                label={city.CTY_Name}
                code={this.props.hiddenName}
                input={this.props.id}
                onClick={this.handleSetCity}
              >
                <Plane />
                <span className="mr-2">{city.CTY_Name}</span>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default SuggestionInput;
