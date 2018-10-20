import React, { Component } from "react";
import { getItems } from "./items.js";
import { getItem } from "./items.js";
import { getPlace } from "./place.js";
import { getPlacePeriod } from "./place.js";

class Nav extends Component {
    state = {  }
    render() { 
        return (
            <div className="row period-row">
            <div className="col-md-3">
              <span className="badge badge-secondary">567</span>
            </div>
            <div className="col-md-3">
              <span className="badge badge-secondary">1567</span>
            </div>
            <div className="col-md-3">
              <span className="badge badge-secondary">2018</span>
            </div>
          </div>
        );
    }
}
 
export default Nav;



class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: 1
    };
  }

  render() {
    if (this.props.itemId != -1) {
      var item = getPlace(this.props.itemId);
      var period = getPlacePeriod(this.props.itemId, this.state.period);
      return (
        <div className="information">
          {/* <p>{this.props.itemId}</p> */}
          {/* <img src={require(`../imgs/place/${item.img}.png`)} /> */}
          <Nav />
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
              <div className="col-sm-9 text">
                {period.text.map(function(txt, i) {
                  return (
                    <React.Fragment>
                      <p key={i}>{txt}</p>
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
