import React, { useState } from "react";
import styled from "styled-components";
import classnames from "classnames";
import {
  $fontSizeSm,
  $white,
  $btnActiveColor,
  $btnHoverColor,
} from "@/style/variables";

function SwitchBtn(props) {
  const [left, right] = props.btns;
  const [activekey, setActive] = useState(left.key);

  const onBtnCLick = (key) => {
    if (activekey !== key) {
      setActive(key);
      props.onBtnSelected(key);
    }
  };

  return (
    <SwitchBtnWrap>
      <div
        onClick={() => {
          onBtnCLick(left.key);
        }}
        className={classnames("switch-btn", "inner-left", {
          active: left.key === activekey,
        })}
      >
        {left.name}
      </div>
      <div
        onClick={() => {
          onBtnCLick(right.key);
        }}
        className={classnames("switch-btn", "inner-right", {
          active: right.key === activekey,
        })}
      >
        {right.name}
      </div>
    </SwitchBtnWrap>
  );
}

export default SwitchBtn;

const SwitchBtnWrap = styled.div`
  height: 30px;
  width: 210px;
  position: relative;
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-radius: 15px;

  .switch-btn {
    height: 28px;
    line-height: 28px;
    width: 105px;
    border-radius: 15px;
    text-align: center;
    cursor: pointer;
    font-size: ${$fontSizeSm};

    &.inner-left {
      position: absolute;
      left: 0px;
      top: 0px;
      border-left: 1px solid ${$btnActiveColor};
    }
    &.inner-right {
      position: absolute;
      right: 0px;
      top: 0px;
      border-right: 1px solid ${$btnActiveColor};
    }
    &.active {
      background: ${$btnActiveColor};
      color: ${$white};
    }
    &:not(.active):hover {
      background: ${$btnHoverColor};
    }
  }
`;
