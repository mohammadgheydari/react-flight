import React, { Component } from "react";
import axios from "axios";
import Modal from "./modal";
import Time from "react-time-format";
import NumberFormat from "react-currency-format";
import "../Shared/Api";
import "../FlightResult/index.css";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightItems: [],
      FSL_Id: this.props.match.params.id,
      ready: false
    };
  }
  componentDidMount() {
    const FSL_Id = this.props.match.params.id,
      self = this;
    axios({
      method: "get",
      url:
        'SearchFlight/?value={"FSL_Id":"' +
        FSL_Id +
        '","PagingModel":{"SortColumn":"TotalChargeable","SortDirection":"0","Page":1,"Size":30}}'
    })
      .then(function(res) {
        console.log(res.data.ResultModel);
        console.log(res.data.ResultModel.ItemList[0]);
        console.log(res.data.ResultModel.ItemList[0].Items[0]);
        const items = res.data.ResultModel.ItemList;
        self.setState({ flightItems: items });
        self.setState({ ready: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const flightRules =
      "در صورت کنسل تا 12 ظهر 3 روز قبل از پرواز 15 درصد از مبلغ بلیط کسر میگردد.";
    const flightCounts = this.state.flightItems.length;
    const flights = this.state.flightItems.map(items => (
      <div key={items.CombinationID}>
        <div className="card mt-2 mb-2">
          <div className="card-body">
            {items.Items.map(item => (
              <div className="row" key={item.AgencyCode}>
                {item.Segments.map(segment => (
                  <React.Fragment>
                    <div
                      key={segment.FlightNumber}
                      className="col-xs-12 col-sm-4 col-md-3 text-center"
                    >
                      <img
                        className="sr-img multi-Segment"
                        width="55px"
                        src={
                          "https://flightio.com/Uploads/Airlines/Logo/" +
                          segment.OperatingAirlineCode +
                          ".png"
                        }
                        title={segment.MarketingAirlineCode}
                        alt=""
                      />
                      <p className="mb-0">
                        {segment.OperatingAirlineNamePersian}
                      </p>
                      <small>{segment.FlightNumber}</small>
                      {/* {axios({
                        method: "get",
                        url:
                          'FlightRules/?value={"FSL_Id":"' +
                          this.state.FSL_Id +
                          '","CombinationId":'
                      })} */}
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 text-center">
                      <p>
                        <Time value={segment.DepartTime} format="hh:mm" />
                      </p>
                      <p>{segment.DestnationCityName}</p>
                    </div>

                    <div className="col-xs-12 col-sm-4 col-md-3 text-center">
                      <p>
                        <Time value={segment.ArrivalTime} format="hh:mm" />
                      </p>
                      <p>{segment.OriginCityName}</p>
                      <Modal
                        id="1"
                        animation="zoom"
                        duration={300}
                        closeOnEsc={false}
                        heading="عنوان"
                        body={flightRules}
                        hasBtn={true}
                        btnText="قوانین بلیط"
                        btnClasses="btn btn-sm btn-outline-info"
                      />
                    </div>
                  </React.Fragment>
                ))}
                <div className="col-xs-12 col-sm-4 col-md-3 text-center">
                  <p>قیمت {items.AdultCount} مسافر </p>
                  <p>
                    <NumberFormat
                      displayType={"text"}
                      value={items.TotalChargeable / 10}
                      thousandSeparator={true}
                      suffix={" تومان"}
                    />
                  </p>
                  <button
                    type="button"
                    class="btn btn-success btn-lg btn-block flightio-btn"
                  >
                    انتخاب
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-3" />
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <p className="text-right">{flightCounts} پرواز موجود است</p>
              <ReactPlaceholder
                type="media"
                color="#E0E0E0"
                rows={15}
                ready={this.state.ready}
                showLoadingAnimation={true}
              >
                {flights}
              </ReactPlaceholder>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
