import React from "react";
import { render } from "react-dom";
import Result from "../result/result.jsx";
import "./flight.css";

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
    name: "Snanghai",
    code: "SHA"
  },
  {
    name: "London",
    code: "LHR"
  }
];

export default class City extends React.Component {
  render() {
    return <option />;
  }
}
