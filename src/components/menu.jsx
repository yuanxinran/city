import React, { Component } from "react";
import { getItems } from "./items.js";
import Content from "./content.jsx";
import { getItem } from "./items.js";
import { getPlace } from "./place.jsx";
import { getPlacePeriod } from "./place.jsx";
import { getContent } from "./place.jsx";
import "../styles/menu.css";
import FadeIn from "react-fade-in";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(),
      hover: -1,
      selected: -1,
      periodInfo: null,
      period: 0
    };
    this.handleItemHover = this.handleItemHover.bind(this);
    this.handleItemHoverLeave = this.handleItemHoverLeave.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.changePeriod = this.changePeriod.bind(this);
  }
  handleItemHover(itemId) {
    this.setState({ hover: itemId });
  }
  handleItemHoverLeave() {
    this.setState({ hover: -1 });
  }
  handleItemClick(itemId) {
    this.setState({ selected: itemId });
    this.setState({ periodInfo: getContent(itemId, 0), period: 0 });
  }

  changePeriod(index) {
    console.log(this.state.selected);
    console.log(index);
    this.setState({
      periodInfo: getContent(this.state.selected, index),
      period: index
    });
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
          <Content
            itemId={this.state.selected}
            changePeriod={this.changePeriod}
            periodInfo={this.state.periodInfo}
            period={this.state.period}
          />
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

  getItemStyle(itemId) {
    let result = { backgroundColor: "transparent" };
    if (
      this.props.hoverId == this.props.item._id ||
      this.props.selectId == this.props.item._id
    ) {
      result = {
        borderColor: "#EBC485"
        // backgroundImage: `url(${Con})`
      };
    } else {
      result = { borderColor: `${this.props.item.color}` };
    }

    // if (itemId % 2 == 0) {
    //   result.marginTop = "20px";
    // } else {
    //   result.marginTop = "3px";
    // }

    return result;
  }
  render() {
    let item = this.props.item;
    let style = this.getItemStyle(item._id);
    let hiddenS = { visibility: "hidden" };
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
          <div className="item-img">
            {show ? (
              <React.Fragment>
                <img src={item.imgc} id={`${item.img}`} />
                <FadeIn>
                  <div
                    className={`item-title ${
                      item.img == "baoen" ? "less" : ""
                    }`}
                  >
                    {item.name}
                  </div>
                </FadeIn>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={item.imgu} id={`${item.img}`} />
                <div
                  className={`item-title ${item.img == "baoen" ? "less" : ""}`}
                  style={hiddenS}
                >
                  {item.name}
                </div>
              </React.Fragment>
            )}
          </div>
          {/* <div className="item-title">{item.name}</div> */}
        </div>
      </div>
    );
  }
}

export default Menu;
