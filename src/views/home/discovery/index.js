import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    return <div>首页</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);