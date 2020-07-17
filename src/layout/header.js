import React, { Component } from "react";
import RouterHistory from "./components/router-history";
import Search from "./components/search";
import { HeaderWrapper, HeaderLeft, HeadeRight, MacButton } from "./style";
import Icon from "@/components/Icon";

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
