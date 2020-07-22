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
  let { type, color, size, backdrop, border, iconClass, hover } = props;
  const getIconCls = () => {
    let cls = `icon-${type}`;
    if (color) {
      cls += ` icon-color-${color}`;
    }
    if (iconClass) {
      if (Array.isArray(iconClass)) {
        cls += iconClass.reduce((prev, curr) => {
          return ` ${prev} ${curr}`;
        });
      } else {
        cls += ` ${iconClass}`;
      }
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
      hover={hover}
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
  if (border) {
    return (
      <Border style={{ width: `${size}px`, height: `${size}px` }}>
        {Icon}
      </Border>
    );
  }
  return Icon;
}

Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  backdrop: PropTypes.bool,
  onClick: PropTypes.func,
  border: PropTypes.bool,
  iconClass: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  hover: PropTypes.bool,
};

Icon.defaultProps = {
  size: 16,
  color: "",
  backdrop: false,
  onClick: () => {},
  border: false,
  iconClass: "",
  hover: true,
};

export default Icon;

const Border = styled.span`
  display: inline-block;
  ${flexCenter};
  background: #e0e0e0;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #d5d5d5;
`;

const Backdrop = styled.span`
  display: inline-block;
  ${flexCenter};
  border-radius: 50%;

  &:hover {
    background: ${$roundHoverBgcolor};
  }
`;

const IconItem = styled.i`
  cursor: ${(props) => (props.hover ? "pointer" : "default")};

  &.icon-color {
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
