import React, { Component } from "react";
import { HeaderWrapper, HeaderLeft, HeadeRight } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft></HeaderLeft>
        <HeadeRight>
          <div className="search-wrap"></div>
        </HeadeRight>
      </HeaderWrapper>
    );
  }
}

export default Header;
