import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
import {
  $miniPlayerZIndex,
  $miniPlayerHeight,
  $bodyBgColor,
  $themeColor,
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
        <SongWrapper></SongWrapper>
        {/* 控制台 */}
        <ControlWrapper>
          {/* 喜欢按钮 */}
          <Icon
            size="22"
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
        <ButtonAreaWrapper></ButtonAreaWrapper>
      </MiniPlayerWrapper>
    );
  }
}

export default MiniPlayer;

const MiniPlayerWrapper = styled.div`
  position: relative;
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

const SongWrapper = styled.div``;

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
    color: #4c4c4c;
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

const ButtonAreaWrapper = styled.div``;
