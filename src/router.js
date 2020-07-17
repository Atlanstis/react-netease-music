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
} from "@/layout";
import { Discovery, SongSheet } from "@/views/home";

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
              <Route path="/home/discovery" component={Discovery} />
              <Route path="/home/song-sheet" component={SongSheet} />
              <Redirect to="/home/discovery" />
            </Switch>
          </div>
        </LayoutContent>
      </LayoutBody>
    </Layoutwrapper>
  </Router>
);

export default AppRouter;
