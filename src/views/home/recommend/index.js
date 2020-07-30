import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actionCreator } from "./store";
import { Banner, RecommSongList, LatestSongs } from "./components";
class Recommend extends Component {
  componentDidMount() {
    this.props.getRecommendData();
  }

  render() {
    return (
      <RecommpendWrapper>
        <Banner />
        <RecommSongList />
        <LatestSongs />
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
      dispatch(actionCreator.getRecommSongListAction());
      dispatch(actionCreator.getLatestSongsAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);

const RecommpendWrapper = styled.div`
  padding: 18px 32px;
`;
