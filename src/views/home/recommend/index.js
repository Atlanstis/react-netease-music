import React, { Component } from "react";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    return <div>发现页</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
