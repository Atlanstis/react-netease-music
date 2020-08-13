import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import classnames from "classnames";
import Icon from "@/components/icon";
import { $themeColor, $iconColor } from "@/style/variables";
import { flexCenter } from "@/style/mixins";
import { actionCreator } from "@/store/modules/music-player";

class PlayControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favor: false,
    };
    this.togglefFavor = this.togglefFavor.bind(this);
    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying() {
    let { currentSong } = this.props;
    if (!currentSong.get("id")) {
      return;
    }
    this.props.togglePlayingState(!this.props.playing);
  }

  togglefFavor() {
    this.setState((state) => {
      return {
        favor: !state.favor,
      };
    });
  }

  render() {
    let { favor } = this.state;
    const { playing } = this.props;
    return (
      <ControlWrapper>
        {/* 喜欢按钮 */}
        <Icon
          size="24"
          type={favor ? "favor" : "unfavor"}
          iconClass={classnames("left", favor ? "favor" : "")}
          onClick={this.togglefFavor}
        ></Icon>
        {/* 播放控制栏 */}
        <Icon size={24} type="prev"></Icon>
        <ControlPlayIcon onClick={this.togglePlaying}>
          <Icon size={24} type={playing ? "pause" : "play"} />
        </ControlPlayIcon>
        <Icon size={24} type="next"></Icon>
      </ControlWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.getIn(["musicPlayer", "playingState"]),
    currentSong: state.getIn(["musicPlayer", "currentSong"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePlayingState(state) {
      dispatch(actionCreator.setPlayingStateAction(state));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayControl);

const ControlWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  ${flexCenter}

  .icon-prev, .icon-next {
    color: ${$themeColor};
  }
  .favor {
    color: ${$themeColor};
  }
  .unfavor {
    color: ${$iconColor};
  }
  .left {
    position: absolute;
    left: 0;
  }
`;

const ControlPlayIcon = styled.div`
  ${flexCenter}
  position: relative;
  width: 45px;
  height: 45px;
  margin: 0 16px;
  border-radius: 50%;
  background: ${$themeColor};
  cursor: pointer;

  i {
    color: #fff;
  }
`;
