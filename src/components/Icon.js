import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  $themeColor,
  $white,
  $fontColorShallow,
  $roundHoverBgcolor,
} from "@/style/variables";
import { flexCenter } from "@/style/mixins";

function Icon(props) {
  let { type, color, size, backdrop } = props;
  const getIconCls = () => {
    let cls = `icon-${type}`;
    if (color) {
      cls += ` icon-color-${color}`;
    }
    return cls;
  };

  const getIconStyle = () => {
    const chromeMinSize = 12;
    // 支持小于12px
    const retStyle = { fontSize: `${size}px` };
    if (size < chromeMinSize) {
      const ratio = size / chromeMinSize;
      retStyle.transform = `scale(${ratio})`;
    }
    return retStyle;
  };
  const Icon = (
    <IconItem
      onClick={() => {
        props.onClick();
      }}
      className={`iconfont ${getIconCls()}`}
      style={getIconStyle()}
    />
  );
  if (backdrop) {
    const backDropSizeRatio = 1.56;
    const backDropSize = `${backDropSizeRatio * size}px`;
    return (
      <Backdrop
        style={{ width: backDropSize, height: backDropSize }}
        className="backdrop"
      >
        {Icon}
      </Backdrop>
    );
  }
  return Icon;
}

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  backdrop: PropTypes.bool,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  size: 16,
  color: "",
  backdrop: false,
  onClick: () => {},
};

export default Icon;

const Backdrop = styled.span`
  display: inline-block;
  ${flexCenter()};
  border-radius: 50%;

  &:hover {
    background: ${$roundHoverBgcolor};
  }
`;

const IconItem = styled.i`
  cursor: pointer;

  .icon-color {
    &-theme {
      color: ${$themeColor};
    }
    &-white {
      color: ${$white};
    }
    &-shallow {
      color: ${$fontColorShallow};
    }
  }
`;
