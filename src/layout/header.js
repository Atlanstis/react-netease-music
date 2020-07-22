import React, { Component } from "react";
import styled from "styled-components";
import RouterHistory from "./components/router-history";
import Search from "./components/search";
import Icon from "@/components/icon";
import {
  $headerHeight,
  $headerBgColor,
  $headerFontColor,
  $black,
  $fontWeightBold,
} from "@/style/variables";
import { flexCenter, round } from "@/style/mixins";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <div className="buttons">
            <MacButton className="mac-button red" diam="12">
              <Icon size={9} type="delete" />
            </MacButton>
            <MacButton className="mac-button yellow" diam="12">
              <Icon size={9} type="minus" />
            </MacButton>
            <MacButton className="mac-button green" diam="12">
              <Icon size={9} type="fullscreen" />
            </MacButton>
          </div>
          <RouterHistory></RouterHistory>
        </HeaderLeft>
        <HeadeRight>
          <div className="search-wrap">
            <Search></Search>
          </div>
        </HeadeRight>
      </HeaderWrapper>
    );
  }
}

export default Header;

// 顶部栏
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${$headerHeight};
  background-color: ${$headerBgColor};
  padding-right: 36px;

  .iconfont {
    color: ${$headerFontColor};
  }
`;
// 顶部栏左侧
const HeaderLeft = styled.div`
  width: 250px;
  padding: 14px 8px 0;
  display: flex;
  justify-content: space-between;

  .buttons {
    display: flex;

    &:hover {
      .mac-button > i {
        opacity: 1;
      }
    }
  }
`;
// 顶部栏左侧按钮
const MacButton = styled.div`
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
// 顶部栏右侧
const HeadeRight = styled.div`
  display: flex;
  align-items: center;

  .search-wrap {
    margin-right: 16px;
  }
`;
