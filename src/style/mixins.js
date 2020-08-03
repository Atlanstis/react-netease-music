import { css } from "styled-components";
import { $white, $fontSizeSm } from "./variables.js";

export const flexCenter = css`
  display: flex;
  flex-direction: ${(props) => {
    return props.direction || "row";
  }};
  align-items: center;
  justify-content: center;
`;

export const round = css`
  width: ${(props) => `${props.diam}px`};
  height: ${(props) => `${props.diam}px`};
  border-radius: 50%;
`;

export const textEllipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const imgWrap = ($width, $height = $width) => {
  return css`
    width: ${$width}px;
    height: ${$height}px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
    }
  `;
};

export const absStretch = css`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
`;

export const absCenter = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const listMixin = ($itemWidth) => {
  return css`
    .list-wrap {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -12px;

      .list-item {
        width: ${$itemWidth};
        margin-bottom: 36px;
        padding: 0 12px;
      }
    }
  `;
};

export const descWrap = css`
  overflow: hidden;

  .desc-wrap {
    position: absolute;
    padding: 6px;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transform: translateY(-100%);
    transition: all 0.3s;

    .desc {
      color: ${$white};
      font-size: ${$fontSizeSm};
    }
  }

  &:hover {
    .desc-wrap {
      transform: translateY(0);
    }
  }
`;
