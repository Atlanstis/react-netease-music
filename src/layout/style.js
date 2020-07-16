import styled from "styled-components";
import {
  $headerHeight,
  $headerBgColor,
  $headerFontColor,
  $black,
  $fontWeightBold,
} from "@/style/variables";
import { flexCenter, round } from "@/style/mixins";

export const Layoutwrapper = styled.div`
  height: 100%;
`;

export const LayoutBody = styled.div`
  display: flex;
  height: calc(100% - ${$headerHeight});
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${$headerHeight};
  background-color: ${$headerBgColor};
  padding-right: 36px;

  .iconfont {
    color: ${$headerFontColor};
  }
`;

export const HeaderLeft = styled.div`
  padding: 14px 14px 0 8px;
  display: flex;

  .buttons {
    display: flex;

    &:hover {
      .mac-button > i {
        opacity: 1;
      }
    }
  }
  .history {
    margin-left: 65px;
  }
`;

export const MacButton = styled.div`
  & {
    ${round}
    ${flexCenter}
    margin-right: 8px;
    cursor: pointer;

    &.red {
      background: #ed655a;
    }

    &.green {
      background: #72be47;
    }

    &.yellow {
      background: #e0c04c;
    }

    i {
      opacity: 0;
      transition: opacity 0.3s;
      color: ${$black};
      font-weight: ${$fontWeightBold};
      transform-origin: center center;
    }
  }
`;

export const HeadeRight = styled.div`
  display: flex;
  align-items: center;

  .search-wrap {
    margin-right: 16px;
  }
`;
