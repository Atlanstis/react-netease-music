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
let RedirectList = [];
Object.keys(RouterConfig).forEach((key) => {
  let routers = RouterConfig[key];
  if (Array.isArray(routers) && routers.length > 0) {
    RedirectList.push({
      from: `/${key}`,
      to: routers[0].path,
    });
    RouterList = RouterList.concat(...routers);
  } else {
    RouterList = RouterList.concat(routers);
  }
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
              {RedirectList.map((redirect) => {
                return (
                  <Redirect
                    exact
                    key={redirect.from}
                    from={redirect.from}
                    to={redirect.to}
                  ></Redirect>
                );
              })}
              {RouterList.map((router) => {
                return (
                  <Route
                    key={router.path}
                    path={router.path}
                    component={router.component}
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
