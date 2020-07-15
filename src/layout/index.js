import React, { Component } from "react";
import { Layoutwrapper } from "./style";
import Header from "./header";

class Layout extends Component {
  render() {
    return (
      <Layoutwrapper>
        <Header></Header>
      </Layoutwrapper>
    );
  }
}

export default Layout;
