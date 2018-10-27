import React, { Component } from "react";
import { getPlace } from "./place.jsx";
import { getPlacePeriod } from "./place.jsx";
// import LineTo from "react-lineto";
import HorizontalTimeline from "../timeline/Components/HorizontalTimeline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const VALUES = ["500-09-01", "2008-09-01", "2018-09-01"];
const LABELS = ["HAHAH", "MIAO", "MIAOMIAOMIAO"];

class Content extends Component {
  constructor(props) {
    super(props);
    this.setContent = this.setContent.bind(this);
    this.state = {
      period: 0,
      value: 0,
      previous: 0,
      showConfigurator: false,

      // timelineConfig
      minEventPadding: 650,
      maxEventPadding: 650,
      linePadding: 100,
      labelWidth: 200,
      fillingMotionStiffness: 150,
      fillingMotionDamping: 25,
      slidingMotionStiffness: 150,
      slidingMotionDamping: 25,
      stylesBackground: "#ccd6e2",
      stylesForeground: "#5a789e",
      stylesOutline: "#dfdfdf",
      isTouchEnabled: true,
      isKeyboardEnabled: true,
      isOpenEnding: false,
      isOpenBeginning: false,
      periodInfo: props.itemId != -1 ? this.getContent(props.itemId, 0) : null
    };
  }

  // handlePeriodClick(periodId) {
  //   this.setState({ period: periodId });
  // }

  setContent(index) {
    // var period = getPlacePeriod(this.props.itemId, index);
    var content = this.getContent(this.props.itemId, index);
    this.setState({
      periodInfo: content
    });
  }

  changePeriod(index, previous) {
    this.props.changePeriod(index);
  }

  render() {
    let parent = this;
    let state = this.state;
    if (this.props.itemId != -1) {
      var item = getPlace(this.props.itemId);
      var period = getPlacePeriod(this.props.itemId, this.props.period);
      return (
        <div className="timeline">
          {/* Bounding box for the Timeline */}
          <h6>Timeline</h6>
          <div
            style={{
              width: "100%",
              height: "150px",
              paddingTop: "40px",
              margin: "5px auto"
            }}
          >
            <HorizontalTimeline
              fillingMotion={{
                stiffness: state.fillingMotionStiffness,
                damping: state.fillingMotionDamping
              }}
              index={this.props.period}
              indexClick={index => {
                // console.log(index);
                // this.setState({ value: index, previous: this.state.value });
                // this.setContent(index);
                this.changePeriod(index, this.props.period);
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
              labels={item.years}
              cutoff={item.cutoff}
              isOpenEnding={state.isOpenEnding}
              isOpenBeginning={state.isOpenBeginning}
            />
          </div>
          <div className="period-detail">{this.props.periodInfo}</div>
        </div>
      );
    } else {
      return <React.Fragment />;
    }
  }

  // render() {
  //   if (this.props.itemId != -1) {
  //     var item = getPlace(this.props.itemId);
  //     var period = getPlacePeriod(this.props.itemId, this.state.period);
  //     return (
  //       <div className="information">
  //         {/* <p>{this.props.itemId}</p> */}
  //         {/* <img src={require(`../imgs/place/${item.img}.png`)} /> */}
  //         <Nav
  //           periods={item.years}
  //           cutoff={item.cutoff}
  //           itemId={this.props.itemId}
  //           handleClick={this.handlePeriodClick}
  //           active={this.state.period}
  //         />
  //       </div>
  //     );
  //   } else {
  //     return <React.Fragment />;
  //   }
  // }
}

export default Content;
