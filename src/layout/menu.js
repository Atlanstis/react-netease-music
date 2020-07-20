import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "@/components/icon";
import User from "./components/user";
import {
  $menuBgColor,
  $fontSizeSm,
  $fontColorGrey2,
  $menuItemHoverBg,
  $fontSizeMediumSm,
  $menuFontColor,
  $themeColor,
} from "@/style/variables";
import { textEllipsis } from "@/style/mixins";

class Menu extends Component {
  render() {
    return (
      <MenuWrapper>
        <User></User>
        <Menus>
          <MenuBlock>
            <p className="menu-block-title">我的音乐</p>
            <MenuList>
              <NavLink
                className="nav-link"
                to="/home"
                activeClassName="menu-item-active"
              >
                <MenuItem>
                  <Icon size={16} type="discovery" className="iconfont" />
                  <span className="menu-title">发现音乐</span>
                </MenuItem>
              </NavLink>
            </MenuList>
          </MenuBlock>
        </Menus>
      </MenuWrapper>
    );
  }
}

export default Menu;

const Menus = styled.div`
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
`;

const MenuBlock = styled.div`
  margin-bottom: 16px;

  .menu-block-title {
    font-size: ${$fontSizeSm};
    color: ${$fontColorGrey2};
    padding-left: 16px;
    margin-bottom: 8px;
  }
`;

const MenuList = styled.div`
  .menu-item-active {
    color: ${$themeColor};
    .menu-title,
    .iconfont {
      color: ${$themeColor};
    }
  }
`;

const MenuItem = styled.div`
  ${textEllipsis}
  padding: 12px 18px;
  cursor: pointer;
  color: ${$menuFontColor};

  &:hover {
    background: ${$menuItemHoverBg};
  }
  .iconfont {
    vertical-align: middle;
  }
  .menu-title {
    font-size: ${$fontSizeMediumSm};
    margin-left: 8px;
    vertical-align: middle;
  }
`;

const MenuWrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${$menuBgColor};
`;
