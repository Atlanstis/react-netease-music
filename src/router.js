import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Layoutwrapper,
  LayoutBody,
  LayoutContent,
  LayoutSider,
  LayoutHeader,
  LayoutMenu,
  MiniPlayer,
} from "@/layout";
import RouterConfig from "@/config/router";

let RouterList = [];
Object.keys(RouterConfig).forEach((key) => {
  RouterList = RouterList.concat(...RouterConfig[key]);
});

const AppRouter = () => (
  <Router>
    <Layoutwrapper>
      <LayoutHeader></LayoutHeader>
      <LayoutBody>
        <LayoutSider>
          <LayoutMenu></LayoutMenu>
        </LayoutSider>
        <LayoutContent>
          <div className="router-view-center">
            <Switch>
              <Redirect exact from="/" to="/home/discovery" />
              <Redirect exact from="/home" to="/home/discovery" />
              {RouterList.map((item) => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                  ></Route>
                );
              })}
            </Switch>
          </div>
        </LayoutContent>
      </LayoutBody>
    </Layoutwrapper>
    <MiniPlayer></MiniPlayer>
  </Router>
);

export default AppRouter;
