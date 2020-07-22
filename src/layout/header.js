import React, { Component } from "react";
import styled from "styled-components";
import { NavLink, withRouter } from "react-router-dom";
import RouterHistory from "./components/router-history";
import Search from "./components/search";
import Icon from "@/components/icon";
import {
  $headerHeight,
  $headerBgColor,
  $headerFontColor,
  $black,
  $fontWeightBold,
  $fontSizeL,
  $fontColorMenu,
  $fontColorMenuUnactive,
} from "@/style/variables";
import { flexCenter, round } from "@/style/mixins";
import RouterConfig from "@/config/router";

class Header extends Component {
  getHeaderMenus() {
    const { pathname } = this.props.location;
    const pathKey = pathname.replace(/(\/.*?)\/.*/, "$1").substring(1);
    return RouterConfig[pathKey] || [];
  }

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
        <HeaderMenus>
          {this.getHeaderMenus().map((link) => {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className="nav-link header-menu"
                activeClassName="menu-item-active"
              >
                {link.name}
              </NavLink>
            );
          })}
        </HeaderMenus>
        <HeadeRight>
          <div className="search-wrap">
            <Search></Search>
          </div>
        </HeadeRight>
      </HeaderWrapper>
    );
  }
}

export default withRouter(Header);

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

// 顶部栏菜单
const HeaderMenus = styled.div`
  flex: 1;
  margin: 0 40px;
  display: flex;
  align-items: center;

  .header-menu {
    color: ${$fontColorMenuUnactive};
    font-size: ${$fontSizeL};
    cursor: pointer;

    &:hover,
    &.menu-item-active {
      color: ${$fontColorMenu};
    }
  }
  .header-menu + .header-menu {
    margin-left: 24px;
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
