import React, { Component } from "react";
import { Layoutwrapper, LayoutBody, LayoutContent, LayoutMenu } from "./style";
import LayoutHeader from "./header";
import Menu from "./components/menu";
import AppRouter from "@/router";

class Layout extends Component {
  render() {
    return (
      <Layoutwrapper>
        <LayoutHeader></LayoutHeader>
        <LayoutBody>
          <LayoutMenu>
            <Menu></Menu>
          </LayoutMenu>
          <LayoutContent>
            <div className="router-view-center">
              <AppRouter></AppRouter>
            </div>
          </LayoutContent>
        </LayoutBody>
      </Layoutwrapper>
    );
  }
}

export default Layout;
