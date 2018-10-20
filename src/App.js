import React, { Component } from "react";
import "./App.css";
import Menu from "./components/menu.jsx";
import Background from "./imgs/background.png";

class App extends Component {
  render() {
    let back = {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    };
    return (
      <div className="App" style={back}>
        <h1>NANJING</h1>
        <Menu />
      </div>
    );
  }
}

export default App;
