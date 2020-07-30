import React from "react";
import styled from "styled-components";
import classnames from "classnames";
import { flexCenter } from "@/style/mixins";
import { $themeColor } from "@/style/variables";
import Icon from "./icon";

function PlayIcon(props) {
  const size = props.size;
  const wrapperStyle = { width: `${size}px`, height: `${size}px` };
  return (
    <PlayIconWrapper
      style={wrapperStyle}
      className={classnames(props.className)}
    >
      <Icon size={size * 0.6} type="play" />
    </PlayIconWrapper>
  );
}

export default PlayIcon;

const PlayIconWrapper = styled.div`
  ${flexCenter}
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);

  .iconfont {
    color: ${$themeColor};
  }
`;
