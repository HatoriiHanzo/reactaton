import React from "react";
import { render } from "react-dom";
import Result from "../result/result.jsx";
import "./flight.css";
import ProgressButton from "react-progress-button";

const cities = [
  {
    name: "Prague",
    code: "PRG"
  },
  {
    name: "Valencia",
    code: "VLC"
  },
  {
    name: "Amsterdam",
    code: "AMS"
  },
  {
    name: "Shanghai",
    code: "SHA"
  },
  {
    name: "London",
    code: "LHR"
  },
  {
    name: "Almaty",
    code: "ALA"
  },
  {
    name: "Milan",
    code: "BGY"
  },
  {
    name: "Berlin",
    code: "TGF"
  },
  {
    name: "Washington",
    code: "AID"
  },
  {
    name: "Nuremberg",
    code: "NUE"
  },
  {
    name: "Barcelona",
    code: "BCN"
  },
  {
    name: "Dubai",
    code: "DXB"
  },
  {
    name: "Moscow",
    code: "DME"
  }
];

export default class Flight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: null,
      cityOne: "",
      cityTwo: "",
      buttonState: ""
    };
  }

  handleChangeOne = e => {
    this.setState({
      cityOne: e.target.value
    });
  };

  handleChangeTwo = e => {
    this.setState({
      cityTwo: e.target.value
    });
  };

  handleClick() {
    this.setState({ buttonState: "loading" });
    this.checkFlight();
    setTimeout(() => {
      this.setState({ buttonState: "success" });
    }, 3000);
  }

  checkFlight = () => {
    console.log(this.state.cityOne);
    console.log(this.state.cityTwo);

    fetch(
      `https://api.skypicker.com/flights?flyFrom=${this.state.cityOne}&to=${
        this.state.cityTwo
      }&date_from=09/11/2018&date_to=09/11/2018&partner=picky`
    )
      .then(response => response.json())
      .then(json => {
        //console.log(json);
        this.setState({
          flights: json.data,
          buttonState: "loading"
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="flight-search">
          <select name="origin" onChange={this.handleChangeOne}>
            {cities &&
              cities.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.name}
                </option>
              ))}
          </select>
          <select name="destination" onChange={this.handleChangeTwo}>
            {cities &&
              cities.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.name}
                </option>
              ))}
          </select>
          <button
            type="submit"
            value="search"
            className="searchBtn"
            onClick={this.checkFlight}
          >
            search
          </button>
        </div>
        <br />
        <div className="Flight-head">
          <p>From</p>
          <p>To</p>
          <p>Travel Time</p>
          <p>Price</p>
        </div>
        <div className="Flights">
          {this.state.flights ? (
            this.state.flights.length == 0 ? (
              <p className="sorry-msg">
                We're sorry, but there is no flight in this direction.
              </p>
            ) : (
              this.state.flights.map(item => (
                <div>
                  <Result
                    dTime={item.dTime}
                    flyFrom={item.cityFrom}
                    aTime={item.aTime}
                    flyTo={item.cityTo}
                    flyDuration={item.fly_duration}
                    price={item.price}
                  />
                </div>
              ))
            )
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}
