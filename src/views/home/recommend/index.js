import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actionCreator } from "./store";
import Banner from "./components/banner";
class Recommend extends Component {
  componentDidMount() {
    this.props.getRecommendData();
  }

  render() {
    return (
      <RecommpendWrapper>
        <Banner />
      </RecommpendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendData() {
      dispatch(actionCreator.getBannerAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);

const RecommpendWrapper = styled.div`
  padding: 18px 32px;
`;
