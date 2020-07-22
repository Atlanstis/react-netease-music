import React, { Component } from "react";
import Icon from "@/components/icon";

const playModeMap = {
  sequence: {
    code: "sequence",
    icon: "sequence",
    name: "顺序播放",
  },
  loop: {
    code: "loop",
    icon: "loop",
    name: "单曲循环",
  },
  random: {
    code: "random",
    icon: "random",
    name: "随机播放",
  },
};

class PlayMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playMode: "sequence",
    };
    this.onChangePlayMode = this.onChangePlayMode.bind(this);
  }

  onChangePlayMode() {
    const modeKeys = Object.keys(playModeMap);
    const currentModeIndex = modeKeys.findIndex(
      (key) => playModeMap[key].code === this.state.playMode
    );
    const nextIndex = (currentModeIndex + 1) % modeKeys.length;
    const nextModeKey = modeKeys[nextIndex];
    const nextMode = playModeMap[nextModeKey];
    this.setState(() => {
      return {
        playMode: nextMode.code,
      };
    });
  }

  render() {
    const { playMode } = this.state;
    return (
      <Icon
        size={24}
        type={playMode}
        iconClass="icon"
        onClick={this.onChangePlayMode}
      ></Icon>
    );
  }
}

export default PlayMode;
