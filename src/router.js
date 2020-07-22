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
              <Redirect exact from="/" to="/home/discovery" />
              <Redirect exact from="/home" to="/home/discovery" />
              <Route path="/home/discovery" component={Discovery} />
              <Route path="/home/song-sheet" component={SongSheet} />
            </Switch>
          </div>
        </LayoutContent>
      </LayoutBody>
    </Layoutwrapper>
    <MiniPlayer></MiniPlayer>
  </Router>
);

export default AppRouter;
