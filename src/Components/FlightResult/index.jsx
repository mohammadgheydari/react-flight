import React, { Component } from "react";
import axios from "axios";
import "../Shared/Api";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightItems: []
    };
  }

  componentDidMount() {
    const FSL_Id = this.props.match.params.id,
      self = this;

    axios({
      method: "get",
      url:
        'SearchFlight/?value={"FSL_Id":"' +FSL_Id+'","PagingModel":{"SortColumn":"TotalChargeable","SortDirection":"0","Page":1,"Size":30}}'
    })
      .then(function(res) {
        console.log(res.data.ResultModel);
        console.log(res.data.ResultModel.ItemList[0]);
        console.log(res.data.ResultModel.ItemList[0].Items[0]);
        const items = res.data.ResultModel.ItemList;
        self.setState({ flightItems: items });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const flightCounts = this.state.flightItems.length;
    const flights = this.state.flightItems.map(items => (
      <div key={items.CombinationID}>
        <div className="card mt-2 mb-2">
          <div className="card-body">
            <p>bc: {items.BaseChargeable}</p>
                {items.Items.map(item => (
                    <div key={item.AgencyCode}>
                        {item.Segments.map(segment=>(
                           <div key={segment.FlightNumber} className="col-xs-12 col-sm-4 col-md-3 text-center">
                                <img className="sr-img multi-Segment" width="55px" src={'https://flightio.com/Uploads/Airlines/Logo/'+segment.OperatingAirlineCode+'.png'}  title={segment.MarketingAirlineCode}  alt=""/>                  
                                <p className="mb-0">{segment.OperatingAirlineNamePersian}</p>
                                <small>{segment.FlightNumber}</small>
                            </div>
                        ))}
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
              {flights}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
