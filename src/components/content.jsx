import React, { Component } from "react";
import { getItems } from "./items.js";
import { getItem } from "./items.js";
import { getPlace } from "./place.js";
import { getPlacePeriod } from "./place.js";
// import LineTo from "react-lineto";
import HorizontalTimeline from "../timeline/Components/HorizontalTimeline";

const VALUES = ["500-09-01", "2008-09-01", "2018-09-01"];
const LABELS = ["HAHAH", "MIAO", "MIAOMIAOMIAO"];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getItemStyle = this.getItemStyle.bind(this);
    this.setContent = this.setContent.bind(this);
    this.getContent = this.getContent.bind(this);
    this.state = {
      value: 0,
      previous: 0,
      showConfigurator: false,

      // timelineConfig
      minEventPadding: 650,
      maxEventPadding: 650,
      linePadding: 100,
      labelWidth: 100,
      fillingMotionStiffness: 150,
      fillingMotionDamping: 25,
      slidingMotionStiffness: 150,
      slidingMotionDamping: 25,
      stylesBackground: "#f8f8f8",
      stylesForeground: "#f2b02e",
      stylesOutline: "#dfdfdf",
      isTouchEnabled: true,
      isKeyboardEnabled: true,
      isOpenEnding: false,
      isOpenBeginning: false,
      periodInfo: this.getContent(props.itemId, 0)
    };
  }

  handleClick(periodId) {
    this.props.handleClick(periodId);
  }

  getItemStyle(inDex) {
    if (this.props.active == inDex) {
      return {
        backgroundColor: "#EBC485",
        fontWeight: "bold"
      };
    } else {
      return {};
    }
  }

  getContent(itemid, index) {
    var period = getPlacePeriod(itemid, index);
    return (
      <div className="information">
        <div className="period">
          <div className="row">
            <div className="col-sm-3 img">
              {period.imgs.map(function(img, j) {
                return (
                  <img src={require(`../imgs/confucius/${img}.png`)} key={j} />
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
  }

  setContent(index) {
    // var period = getPlacePeriod(this.props.itemId, index);
    var content = this.getContent(this.props.itemId, index);
    this.setState({
      periodInfo: content
    });
  }

  render() {
    let parent = this;
    let state = this.state;
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "100%",
            height: "200px",
            paddingTop: "60px",
            margin: "5px auto"
          }}
        >
          <HorizontalTimeline
            fillingMotion={{
              stiffness: state.fillingMotionStiffness,
              damping: state.fillingMotionDamping
            }}
            index={this.state.value}
            indexClick={index => {
              // console.log(index);
              this.setState({ value: index, previous: this.state.value });
              this.setContent(index);
            }}
            isKeyboardEnabled={state.isKeyboardEnabled}
            isTouchEnabled={state.isTouchEnabled}
            labelWidth={state.labelWidth}
            linePadding={state.linePadding}
            maxEventPadding={state.maxEventPadding}
            minEventPadding={state.minEventPadding}
            slidingMotion={{
              stiffness: state.slidingMotionStiffness,
              damping: state.slidingMotionDamping
            }}
            styles={{
              // background: state.stylesBackground,
              foreground: state.stylesForeground,
              outline: state.stylesOutline
              // fontSize: "3em"
            }}
            values={VALUES}
            labels={this.props.periods}
            isOpenEnding={state.isOpenEnding}
            isOpenBeginning={state.isOpenBeginning}
          />
        </div>
        <div className="text-center">{this.state.periodInfo}</div>
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
            itemId={this.props.itemId}
            handleClick={this.handlePeriodClick}
            active={this.state.period}
          />
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }
}

export default Content;
