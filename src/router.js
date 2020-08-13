import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  PlayList,
} from "@/layout";
import Toggle from "@/components/toggle";
import { actionCreator } from "@/store/modules/system";
import RouterConfig, { HOME_PREFIX } from "@/config/router";

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

function AppRouter(props) {
  const playListShow = useSelector((state) =>
    state.getIn(["system", "playListShow"])
  );
  const dispatch = useDispatch();
  return (
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
                <Redirect exact from="/" to={`/${HOME_PREFIX}`} />
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
      {playListShow ? (
        <Toggle
          onToggleClose={() => {
            dispatch(actionCreator.setPlayListShow(false));
          }}
          reserveDom={["#mini-player"]}
        >
          <PlayList />
        </Toggle>
      ) : null}
    </Router>
  );
}

export default AppRouter;
