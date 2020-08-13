import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "@/store/modules/music-player";

class Audio extends Component {
  constructor(props) {
    super(props);
    this.onCanplay = this.onCanplay.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
    this.$audio.volume = this.props.volume;
  }

  currentTimeClickChange(percent) {
    this.$audio.currentTime =
      this.props.currentSong.get("durationSec") * percent;
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.volume !== this.props.volume) {
      this.$audio.volume = nextProps.volume;
      return false;
    }
    if (this.props.currentSong.get("id") !== nextProps.currentSong.get("id")) {
      if (!nextProps.currentSong.get("id")) {
        this.$audio.pause();
      }
      return true;
    } else {
      nextProps.playingState ? this.$audio.play() : this.$audio.pause();
      return false;
    }
  }

  onCanplay() {
    let { playingState } = this.props;
    if (playingState) {
      this.$audio.play();
    }
  }

  onTimeUpdate(e) {
    const time = e.target.currentTime;
    this.props.setSongCurrentTime(time);
  }

  render() {
    let { currentSong } = this.props;
    let src = currentSong.get("url");
    return (
      <audio
        ref={($audio) => {
          this.$audio = $audio;
        }}
        src={src}
        onCanPlay={this.onCanplay}
        onTimeUpdate={this.onTimeUpdate}
      >
        <track src={src} kind="captions" />
      </audio>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.getIn(["musicPlayer", "currentSong"]),
    playingState: state.getIn(["musicPlayer", "playingState"]),
    volume: state.getIn(["musicPlayer", "volume"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSongCurrentTime(time) {
      dispatch(actionCreator.setCurrentTimeAction(time));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
