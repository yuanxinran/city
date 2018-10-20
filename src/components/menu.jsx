import React, { Component } from "react";
import { getItems } from "./items.js";
import Content from "./content.jsx";
import { getItem } from "./items.js";
import { getPlace } from "./place.js";
import { getPlacePeriod } from "./place.js";
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
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemHover(itemId) {
    this.setState({ hover: itemId });
  }
  handleItemHoverLeave() {
    this.setState({ hover: -1 });
  }
  handleItemClick(itemId) {
    this.setState({ selected: itemId });
  }
  render() {
    let parent = this;
    return (
      <React.Fragment>
        <div className="menu-content">
          {this.state.items.map(function(item, j) {
            return (
              <React.Fragment key={j}>
                {/* {console.log(this)} */}
                <MenuItem
                  item={item}
                  handleHover={parent.handleItemHover}
                  handleHoverLeave={parent.handleItemHoverLeave}
                  handleClick={parent.handleItemClick}
                  hoverId={parent.state.hover}
                  selectId={parent.state.selected}
                />
              </React.Fragment>
            );
          })}
        </div>
        <div className="place-content">
          <Content itemId={this.state.selected} />
        </div>
      </React.Fragment>
    );
  }
}

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getItemStyle = this.getItemStyle.bind(this);
  }

  state = {};

  handleHover() {
    this.props.handleHover(this.props.item._id);
  }
  handleHoverLeave() {
    this.props.handleHoverLeave();
  }

  handleClick() {
    this.props.handleClick(this.props.item._id);
  }

  getItemStyle() {
    if (
      this.props.hoverId == this.props.item._id ||
      this.props.selectId == this.props.item._id
    ) {
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
    let show =
      this.props.hoverId == item._id || this.props.selectId == item._id;

    return (
      <div
        className="item-container"
        style={style}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverLeave}
        onClick={this.handleClick}
      >
        <div className="item-content">
          <div className="item-title">{item.name}</div>
          <div className="item-img">
            {show ? (
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
