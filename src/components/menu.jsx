import React, { Component } from "react";
import { getItems } from "./items.js";
import "../styles/menu.css";
class Menu extends Component {
  state = {
    items: getItems()
  };
  render() {
    return (
      <div className="menu-content">
        {this.state.items.map(function(item, j) {
          return (
            <React.Fragment key={j}>
              <MenuItem item={item} />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    let item = this.props.item;
    let style = {
      width: "100%",
      borderColor: `${item.color}`,
      borderStyle: "solid",
      borderWidth: "8px",
      backgroundColor: "white",
      paddingTop: "5px"
    };
    return (
      <div className="item-container" style={style}>
        <div className="item-content">
          <div className="item-title">{item.name}</div>
          <div className="item-img">
            <img src={item.imgu} id={`${item.img}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
