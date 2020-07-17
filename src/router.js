import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Discovery, SongSheet } from "@/views/home";

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/home/discovery" component={Discovery} />
      <Route path="/home/song-sheet" component={SongSheet} />
      <Redirect to="/home/discovery" />
    </Switch>
  </Router>
);

export default AppRouter;
