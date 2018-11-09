import React from "react";
import { render } from "react-dom";
import "./result.css";
import { DateTime } from "luxon";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
  }

  render() {
    const dTime = this.props.dTime * 1000;
    const aTime = this.props.aTime * 1000;
    console.log(dTime);
    return (
      <div className="selectFlight">
        <div className="flightAttribute">
          <div className="flightItem">
            <div>
              {this.props.dTime && DateTime.fromMillis(dTime).toFormat("hh:mm")}
            </div>
            <div>{this.props.flyFrom}</div>
          </div>
          <div className="flightItem">
            <div>
              {this.props.aTime && DateTime.fromMillis(aTime).toFormat("hh:mm")}
            </div>
            <div>{this.props.flyTo}</div>
          </div>
          <div className="flightItem">
            <div>{this.props.flyDuration}</div>
          </div>
          <div className="flightItem">
            <div>${this.props.price}</div>
          </div>
        </div>
      </div>
    );
  }
}
