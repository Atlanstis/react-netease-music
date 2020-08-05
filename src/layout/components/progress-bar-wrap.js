import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ProgreesBar from "@/components/progress-bar";

class ProgessBarWrap extends Component {
  render() {
    const { currentSong, currentTime } = this.props;
    const hasCurrentSong = !Boolean(currentSong.get("id"));
    const durationSec = currentSong.get("durationSec");
    const percent = Math.min(currentTime / durationSec, 1) || 0;
    return (
      <ProgressBarWrpper>
        <ProgreesBar
          disabled={hasCurrentSong}
          percent={percent}
          onPercentClickChange={this.props.onPercentClickChange}
        />
      </ProgressBarWrpper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.getIn(["musicPlayer", "currentSong"]),
    currentTime: state.getIn(["musicPlayer", "currentTime"]),
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgessBarWrap);

const ProgressBarWrpper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -14px;
`;
