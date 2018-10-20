import React, { Component } from "react";
import { getItems } from "./items.js";
import "../styles/menu.css";

import Con from "../imgs/background/confucius.png";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(),
      hover: -1,
      selected: -1
    };
    this.handleItemHover = this.handleItemHover.bind(this);
    this.handleItemHoverLeave = this.handleItemHoverLeave.bind(this);
  }
  handleItemHover(itemId) {
    this.setState({ hover: itemId });
  }
  handleItemHoverLeave() {
    this.setState({ hover: -1 });
  }
  render() {
    let parent = this;
    return (
      <div className="menu-content">
        {this.state.items.map(function(item, j) {
          return (
            <React.Fragment key={j}>
              {/* {console.log(this)} */}
              <MenuItem
                item={item}
                handleHover={parent.handleItemHover}
                handleHoverLeave={parent.handleItemHoverLeave}
                hoverId={parent.state.hover}
              />
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
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.getItemStyle = this.getItemStyle.bind(this);
  }

  state = {};

  handleHover() {
    this.props.handleHover(this.props.item._id);
  }
  handleHoverLeave() {
    this.props.handleHoverLeave();
  }

  getItemStyle() {
    if (this.props.hoverId == this.props.item._id) {
      return {
        borderColor: "#EBC485",
        backgroundImage: `url(${Con})`
      };
    } else {
      return { borderColor: `${this.props.item.color}` };
    }
  }
  render() {
    let item = this.props.item;
    let style = this.getItemStyle();

    return (
      <div
        className="item-container"
        style={style}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverLeave}
      >
        <div className="item-content">
          <div className="item-title">{item.name}</div>
          <div className="item-img">
            {this.props.hoverId == item._id ? (
              <img src={item.imgc} id={`${item.img}`} />
            ) : (
              <img src={item.imgu} id={`${item.img}`} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
