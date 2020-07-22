import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
import ProgreesBar from "@/components/progress-bar";
import Volume from "./components/volume";
import PlayMode from "./components/play-mode";
import Song from "./components/song";
import {
  $miniPlayerZIndex,
  $miniPlayerHeight,
  $bodyBgColor,
  $themeColor,
  $miniPlayerIconColor,
} from "@/style/variables";
import { flexCenter } from "@/style/mixins";

class MiniPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      favor: false,
    };
    this.togglePlaying = this.togglePlaying.bind(this);
    this.togglefFavor = this.togglefFavor.bind(this);
  }

  togglePlaying() {
    this.setState((state) => {
      return {
        playing: !state.playing,
      };
    });
  }

  togglefFavor() {
    this.setState((state) => {
      return {
        favor: !state.favor,
      };
    });
  }

  render() {
    let { favor, playing } = this.state;
    return (
      <MiniPlayerWrapper>
        {/* 左侧歌曲 */}
        <Song></Song>
        {/* 控制台 */}
        <ControlWrapper>
          {/* 喜欢按钮 */}
          <Icon
            size="24"
            type={favor ? "favor" : "unfavor"}
            iconClass={favor ? ["favor", "left"] : "left"}
            onClick={this.togglefFavor}
          ></Icon>
          {/* 播放控制栏 */}
          <Icon size={24} type="prev"></Icon>
          <ControlPlayIcon onClick={this.togglePlaying}>
            <Icon size={24} type={playing ? "pause" : "play"} />
          </ControlPlayIcon>
          <Icon size={24} type="next"></Icon>
        </ControlWrapper>
        {/* 右侧按钮区 */}
        <ButtonAreaWrapper>
          {/* 播放模式 */}
          <PlayMode></PlayMode>
          {/* 查看播放列表 */}
          <Icon size={24} type="playlist" iconClass="icon"></Icon>
          {/* 音量控制条 */}
          <Volume></Volume>
        </ButtonAreaWrapper>
        {/* 音乐播放进度条 */}
        <ProgressBarWrpper>
          <ProgreesBar></ProgreesBar>
        </ProgressBarWrpper>
      </MiniPlayerWrapper>
    );
  }
}

export default MiniPlayer;

const MiniPlayerWrapper = styled.div`
  position: fixed;
  z-index: ${$miniPlayerZIndex};
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: ${$miniPlayerHeight};
  padding: 8px 16px;
  padding-right: 24px;
  background: ${$bodyBgColor};
`;

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
    color: ${$miniPlayerIconColor};
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

const ButtonAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icon {
    color: ${$miniPlayerIconColor};
    margin-left: 16px;
  }
`;

const ProgressBarWrpper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -14px;
`;
