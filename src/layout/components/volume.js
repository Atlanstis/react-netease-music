import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
import { $progressBgColor, $themeColor } from "@/style/variables";
import { prefixStyle } from "@/utils/dom";
const transform = prefixStyle("transform");

class Volume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseIn: false,
      volume: 0,
      volumeBak: 0,
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
      Math.min(rect.bottom - e.pageY, this.$progressBar.clientHeight)
    );
    this.offset(offsetHeight);
  }

  offset(offsetHeight) {
    this.setState(() => {
      return {
        volume: offsetHeight,
      };
    });
  }

  toggleVolume() {
    const { volume } = this.state;
    if (volume === 0) {
      this.setState((state) => {
        return {
          volume: state.volumeBak,
        };
      });
    } else {
      this.setState((state) => {
        return {
          volumeBak: state.volume,
          volume: 0,
        };
      });
    }
  }

  render() {
    let { mouseIn, volume } = this.state;
    let transformBak = transform.charAt(0).toUpperCase() + transform.substr(1);
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
          type={volume > 0 ? "volume-open" : "volume-mute"}
          size={24}
          iconClass="icon"
          onClick={this.toggleVolume}
        ></Icon>
        {mouseIn ? (
          <VolumeBar>
            <VolumeProgressBar
              onClick={this.progressClick}
              ref={($progressBar) => {
                this.$progressBar = $progressBar;
              }}
            >
              <BarInner>
                <Progress style={{ height: `${volume}px` }}></Progress>
                <ProgressBtnWrapper>
                  <ProgressBtn
                    style={{
                      [transformBak]: `translate3d(0, -${volume}px, 0)`,
                    }}
                  ></ProgressBtn>
                </ProgressBtnWrapper>
              </BarInner>
            </VolumeProgressBar>
            <VolumeArrow></VolumeArrow>
          </VolumeBar>
        ) : null}
      </VolumeWrapper>
    );
  }
}

export default Volume;

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
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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
