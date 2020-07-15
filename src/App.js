import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/home";
import Layout from "./layout";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout></Layout>
        <BrowserRouter>
          <Route exact path="/" component={Home}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
