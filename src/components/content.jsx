import React, { Component } from "react";
import { getItems } from "./items.js";
import { getItem } from "./items.js";
import { getPlace } from "./place.js";
import { getPlacePeriod } from "./place.js";
import LineTo from "react-lineto";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getItemStyle = this.getItemStyle.bind(this);
  }
  state = {};

  handleClick(periodId) {
    this.props.handleClick(periodId);
  }

  getItemStyle(inDex) {
    console.log(this.props.active);
    console.log(inDex);
    if (this.props.active == inDex) {
      console.log("in!");
      return {
        backgroundColor: "#EBC485",
        fontWeight: "bold"
      };
    } else {
      return {};
    }
  }

  render() {
    let parent = this;
    return (
      <div className="row period-row">
        {this.props.periods.map(function(year, j) {
          return (
            <div
              className={`col-sm-4 year-container`}
              onClick={() => parent.handleClick(j)}
              key={j}
              style={parent.getItemStyle(j)}
            >
              <div className="year-text">{year}</div>
              {/* <span className="badge badge-secondary">{year}</span> */}
            </div>
          );
        })}
        {/* <div className="col-md-3">
          <span className="badge badge-secondary">1567</span>
        </div>
        <div className="col-md-3">
          <span className="badge badge-secondary">2018</span>
        </div> */}
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 0
    };
    this.handlePeriodClick = this.handlePeriodClick.bind(this);
  }

  handlePeriodClick(periodId) {
    this.setState({ period: periodId });
  }

  render() {
    if (this.props.itemId != -1) {
      var item = getPlace(this.props.itemId);
      var period = getPlacePeriod(this.props.itemId, this.state.period);
      return (
        <div className="information">
          {/* <p>{this.props.itemId}</p> */}
          {/* <img src={require(`../imgs/place/${item.img}.png`)} /> */}
          <Nav
            periods={item.years}
            handleClick={this.handlePeriodClick}
            active={this.state.period}
          />
          <div className="period">
            <div className="row">
              <div className="col-sm-3 img">
                {period.imgs.map(function(img, j) {
                  return (
                    <img
                      src={require(`../imgs/confucius/${img}.png`)}
                      key={j}
                    />
                  );
                })}
              </div>
              <div className="col-sm-7 offset-sm-1 text">
                {period.text.map(function(txt, i) {
                  return (
                    <React.Fragment key={i}>
                      <p>{txt}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default Content;
