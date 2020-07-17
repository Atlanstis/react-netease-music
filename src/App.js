import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router";
import { Globalstyle } from "./style/root";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle></Globalstyle>
        <Router></Router>
      </Provider>
    );
  }
}

export default App;
