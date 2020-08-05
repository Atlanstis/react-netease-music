import React, { Component } from "react";
import styled from "styled-components";
import { $progressBgColor, $themeColor } from "@/style/variables";
import PropTypes from "prop-types";
import { prefixStyle } from "@/utils/dom";
const transform = prefixStyle("transform");

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.progressClick = this.progressClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.percent !== this.props.percent) {
      this.setProgressOffset(nextProps.percent);
    }
    return false;
  }

  progressClick(e) {
    const { disabled } = this.props;
    if (!disabled) {
      const rect = this.$progressBar.getBoundingClientRect();
      const progressBarWidth = this.$progressBar.clientWidth;
      const offsetWidth = Math.max(
        0,
        Math.min(e.pageX - rect.left, progressBarWidth)
      );
      this.offset(offsetWidth);
      const percent = offsetWidth / progressBarWidth;
      this.props.onPercentClickChange(percent);
    }
  }

  setProgressOffset(percent) {
    if (percent >= 0) {
      const barWidth = this.$progressBar.clientWidth;
      const offsetWidth = percent * barWidth;
      this.offset(offsetWidth);
    }
  }

  // 进度条进行偏移
  offset(offsetWidth) {
    offsetWidth = `${offsetWidth}px`;
    this.$progress.style.width = `${offsetWidth}`;
    this.$progressBtn.style[transform] = `translate3d(${offsetWidth},0,0)`;
  }

  render() {
    let { btnshow } = this.props;
    return (
      <ProgressBarWrapper
        onClick={this.progressClick}
        ref={($progressBar) => {
          this.$progressBar = $progressBar;
        }}
      >
        {/* 进度条 */}
        <BarInner>
          <Progress
            ref={($progress) => {
              this.$progress = $progress;
            }}
          ></Progress>
          {/* 进度按钮 */}
          <ProgressBtnWrapper>
            <ProgressBtn
              className={["progress-btn", btnshow ? "show" : ""].join(" ")}
              ref={($progressBtn) => {
                this.$progressBtn = $progressBtn;
              }}
            ></ProgressBtn>
          </ProgressBtnWrapper>
        </BarInner>
      </ProgressBarWrapper>
    );
  }
}

export default ProgressBar;

ProgressBar.propTypes = {
  disabled: PropTypes.bool,
  btnshow: PropTypes.bool,
  percent: PropTypes.number,
  onPercentClickChange: PropTypes.func,
};

ProgressBar.defaultProps = {
  disabled: false,
  btnshow: false,
  percent: 0,
  onPercentClickChange: () => {},
};

const ProgressBarWrapper = styled.div`
  height: 30px;
  cursor: pointer;

  &:hover {
    .progress-btn {
      display: block !important;
    }
  }
`;

const BarInner = styled.div`
  position: relative;
  top: 14px;
  height: 2px;
  background: ${$progressBgColor};
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  background: ${$themeColor};
`;

const ProgressBtnWrapper = styled.div`
  position: absolute;
  left: -15px;
  top: -13px;
  width: 30px;
  height: 30px;
`;

const ProgressBtn = styled.div`
  display: none;
  position: relative;
  top: 8px;
  left: 9px;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${$themeColor};

  &.show {
    display: block !important;
  }
`;
