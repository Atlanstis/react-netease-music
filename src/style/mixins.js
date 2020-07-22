import { css } from "styled-components";

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

export const imgWrap = css`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height || props.width}px`};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

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
