import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "@/components/carousel";
class Recommend extends Component {
  render() {
    return (
      <div>
        发现页
        <div>
          <Carousel height="200px">
            <div className="slide" style={{ background: "red" }}>
              1
            </div>
            <div className="slide" style={{ background: "blue" }}>
              2
            </div>
            <div className="slide" style={{ background: "green" }}>
              3
            </div>
            <div className="slide" style={{ background: "white" }}>
              4
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
