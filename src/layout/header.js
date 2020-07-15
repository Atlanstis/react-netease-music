import React, { Component } from "react";
import { Button } from "antd";
import { HeaderWrapper, HeaderLeft, HeadeRight } from "./style";

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <Button type="primary">Button</Button>
        </HeaderLeft>
        <HeadeRight>
          <div className="search-wrap"></div>
        </HeadeRight>
      </HeaderWrapper>
    );
  }
}

export default Header;
