import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./index.html";
import "./flight/flight.jsx";
import Flight from "./flight/flight.jsx";

class App extends React.Component {
  render() {
    return <Flight />;
  }
}

render(<App />, document.querySelector("#app"));
