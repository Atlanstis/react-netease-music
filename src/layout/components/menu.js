import React, { Component } from "react";
import styled from "styled-components";
import { $menuBgColor } from "@/style/variables";

class Menu extends Component {
  render() {
    return <MenuWrapper></MenuWrapper>;
  }
}

export default Menu;

const MenuWrapper = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${$menuBgColor};
`;
