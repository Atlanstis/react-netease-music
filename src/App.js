import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./layout";
import { Globalstyle } from "./style/root";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle></Globalstyle>
        <Layout></Layout>
      </Provider>
    );
  }
}

export default App;
