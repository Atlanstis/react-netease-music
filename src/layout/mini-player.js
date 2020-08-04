import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
import ProgreesBar from "@/components/progress-bar";
import { PLayControl, PlayMode, Song, Volume } from "./components";
import {
  $miniPlayerZIndex,
  $miniPlayerHeight,
  $bodyBgColor,
  $miniPlayerIconColor,
} from "@/style/variables";

class MiniPlayer extends Component {
  render() {
    return (
      <MiniPlayerWrapper>
        {/* 左侧播放歌曲 */}
        <Song></Song>
        {/* 控制台 */}
        <PLayControl />
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
