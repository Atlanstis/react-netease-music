import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
class RouterHistory extends Component {
  constructor(props) {
    super(props);
    this.routerBack = this.routerBack.bind(this);
    this.routerForward = this.routerForward.bind(this);
  }

  routerBack() {
    console.log("返回上一页");
  }

  routerForward() {
    console.log("前往下一页");
  }

  render() {
    return (
      <RouterHistoryWrapper>
        <Icon
          backdrop={true}
          type="arrow-left"
          onClick={this.routerBack}
        ></Icon>
        <Icon
          backdrop={true}
          type="arrow-right"
          onClick={this.routerForward}
        ></Icon>
      </RouterHistoryWrapper>
    );
  }
}

export default RouterHistory;

const RouterHistoryWrapper = styled.div`
  display: flex;
  align-items: center;
`;
