import { css } from "styled-components";
import { $fontSizeSm, $white } from "./variables";

// 播放数量
export const $$playCountWrap = css`
  .play-count-wrap {
    display: flex;
    align-items: center;
    position: absolute;
    right: 6px;
    top: 2px;
    font-size: ${$fontSizeSm};
    color: ${$white};
    i {
      display: inline-block;
      margin-right: 4px;
    }
  }
`;

// hover 遮罩
export const $$descWrap = css`
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
