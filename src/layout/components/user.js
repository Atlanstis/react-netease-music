import React, { Component } from "react";
import styled from "styled-components";
import Icon from "@/components/Icon";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    return (
      <UserWrapper>
        <UserLoginBox>
          <Icon type="user" size={40} border={true}></Icon>
          <div className="right-wrapper">
            <span className="user-name">未登录</span>
            <Icon type="triangle-right" size={12}></Icon>
          </div>
        </UserLoginBox>
      </UserWrapper>
    );
  }
}

export default User;

const UserWrapper = styled.div`
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 12px;
`;

const UserLoginBox = styled.div`
  display: flex;
  align-items: center;

  .icon-user {
    color: #fff;
  }
  .right-wrapper {
    cursor: pointer;
    white-space: nowrap;
  }
  .icon-triangle-right {
    padding-left: 4px;
    color: #8e8e8e;
  }
  .user-name {
    margin-left: 8px;
  }
`;
