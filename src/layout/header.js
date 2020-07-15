import React, { Component } from "react";
import RouterHistory from "./components/routerHistory";
import Search from "./components/search";
import { HeaderWrapper, HeaderLeft, HeadeRight } from "./style";
import Icon from "@/components/Icon";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <div className="buttons">
            <div className="mac-button red">
              <Icon size={9} type="delete" />
            </div>
            <div className="mac-button yellow">
              <Icon size={9} type="minus" />
            </div>
            <div className="mac-button green">
              <Icon size={9} type="fullscreen" />
            </div>
          </div>
          <div className="history">
            <RouterHistory></RouterHistory>
          </div>
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
