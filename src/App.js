import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import Background from "./imgs/background.png";
import HorizontalTimeline from "react-horizontal-timeline";

const VALUES = ["09/09/1998", "09/09/2008", "09/09/2018"];

class App extends Component {
  render() {
    let back = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    return (
      <div className="App" style={back}>
        <h1>NANJING • 南京</h1>
        <Menu />
      </div>
    );
  }
}

export default App;
