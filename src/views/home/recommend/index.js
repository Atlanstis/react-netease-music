import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actionCreator } from "./store";
import { $fontSize, $fontColorPrimary } from "@/style/variables";
import {
  Banner,
  RecommSongList,
  LatestSongs,
  RecommMvs,
  DjProgram,
} from "./components";
class Recommend extends Component {
  componentDidMount() {
    this.props.getRecommendData();
  }

  render() {
    const { hasDataLoaded } = this.props;
    return (
      <RecommpendWrapper>
        {hasDataLoaded ? (
          <Fragment>
            <Banner />
            <RecommSongList />
            <LatestSongs />
            <RecommMvs />
            <DjProgram />
          </Fragment>
        ) : (
          <LoadingWrap>载入中...</LoadingWrap>
        )}
      </RecommpendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hasDataLoaded: state.getIn(["recommend", "hasDataLoaded"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRecommendData() {
      dispatch(actionCreator.getBannerAction());
      dispatch(actionCreator.getRecommSongListAction());
      dispatch(actionCreator.getLatestSongsAction());
      dispatch(actionCreator.getRecommMvsAction());
      dispatch(actionCreator.getRecommDjProgramAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);

const RecommpendWrapper = styled.div`
  padding: 18px 32px;
`;

const LoadingWrap = styled.div`
  margin-top: 260px;
  text-align: center;
  font-size: ${$fontSize};
  color: ${$fontColorPrimary};
`;
