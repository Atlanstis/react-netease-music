import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
import { $progressBgColor, $themeColor } from "@/style/variables";
import { boxShadow } from "@/style/mixins";
import { connect } from "react-redux";
import { prefixStyle } from "@/utils/dom";
import { actionCreator } from "@/store/modules/music-player";
const transform = prefixStyle("transform");

class Volume extends Component {
  progressBarHeight = 0;

  constructor(props) {
    super(props);
    this.state = {
      initiated: false,
      mouseIn: false,
      offsetHeight: 0,
      offsetHeightBak: 0,
    };
    this.handleMouseStatus = this.handleMouseStatus.bind(this);
    this.progressClick = this.progressClick.bind(this);
    this.toggleVolume = this.toggleVolume.bind(this);
  }

  handleMouseStatus(flag) {
    this.setState(() => {
      return {
        mouseIn: flag,
      };
    });
  }

  progressClick(e) {
    const rect = this.$progressBar.getBoundingClientRect();
    const offsetHeight = Math.max(
      0,
      Math.min(rect.bottom - e.pageY, this.progressBarHeight)
    );
    this.setState(() => {
      return {
        offsetHeight,
      };
    });
    this.setVolumeStorage(offsetHeight);
  }

  toggleVolume() {
    let { offsetHeight, offsetHeightBak } = this.state;
    if (offsetHeight === 0) {
      offsetHeight = offsetHeightBak;
    } else {
      offsetHeightBak = offsetHeight;
      offsetHeight = 0;
    }
    this.setState({
      offsetHeight,
      offsetHeightBak,
    });
    this.setVolumeStorage(offsetHeight);
  }

  setVolumeStorage(offsetHeight) {
    let volume = Number((offsetHeight / this.progressBarHeight).toFixed(2));
    this.props.setVolume(volume);
  }

  componentDidMount() {
    let { initiated, offsetHeight } = this.state;
    const { volume } = this.props;
    if (!initiated) {
      this.progressBarHeight = this.$progressBar.clientHeight;
      if (volume > 0) {
        offsetHeight = volume * this.progressBarHeight;
      }
      this.setState({
        initiated: true,
        offsetHeight,
        offsetHeightBak: offsetHeight,
      });
    }
  }

  render() {
    const { mouseIn, initiated, offsetHeight } = this.state;
    let VolumeBarStyle = !initiated
      ? { visibility: "hidden" }
      : { display: mouseIn ? "" : "none" };
    let transformCompatible =
      transform.charAt(0).toUpperCase() + transform.substr(1);
    return (
      <VolumeWrapper
        onMouseEnter={() => {
          this.handleMouseStatus(true);
        }}
        onMouseLeave={() => {
          this.handleMouseStatus(false);
        }}
      >
        <Icon
          type={offsetHeight > 0 ? "volume-open" : "volume-mute"}
          size={24}
          iconClass="icon"
          onClick={this.toggleVolume}
        ></Icon>
        <VolumeBar style={VolumeBarStyle}>
          <VolumeProgressBar
            onClick={this.progressClick}
            ref={($progressBar) => {
              this.$progressBar = $progressBar;
            }}
          >
            <BarInner>
              <Progress style={{ height: `${offsetHeight}px` }}></Progress>
              <ProgressBtnWrapper>
                <ProgressBtn
                  style={{
                    [transformCompatible]: `translate3d(0, -${offsetHeight}px, 0)`,
                  }}
                ></ProgressBtn>
              </ProgressBtnWrapper>
            </BarInner>
          </VolumeProgressBar>
          <VolumeArrow></VolumeArrow>
        </VolumeBar>
      </VolumeWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    volume: state.getIn(["musicPlayer", "volume"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVolume(volume) {
      dispatch(actionCreator.setVolumeAction(volume));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Volume);

const VolumeWrapper = styled.div`
  position: relative;
`;

const VolumeBar = styled.div`
  position: absolute;
  bottom: 32px;
  width: 36px;
  height: 120px;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  z-index: 2000;
  border-radius: 2px;
  border: 1px solid #ebeef5;
  ${boxShadow};
`;

const VolumeArrow = styled.div`
  left: 50%;
  transform: translateX(-50%);
  bottom: -8px;
  position: absolute;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #ebeef5;
  &:after {
    content: "";
    left: 50%;
    transform: translateX(-50%);
    bottom: 1px;
    position: absolute;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
  }
`;

const VolumeProgressBar = styled.div`
  position: absolute;
  top: 14px;
  bottom: 14px;
  left: 0;
  right: 0;
  cursor: pointer;
`;

const BarInner = styled.div`
  position: relative;
  width: 2px;
  height: 100%;
  margin: 0 auto;
  background: ${$progressBgColor};
`;

const Progress = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${$themeColor};
`;

const ProgressBtnWrapper = styled.div`
  position: absolute;
  left: -14px;
  bottom: 0;
  width: 30px;
  height: 30px;
`;

const ProgressBtn = styled.div`
  position: absolute;
  bottom: -6px;
  left: 9px;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${$themeColor};
`;
