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
