import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import { $fontSizeTitle, $fontColorTitle } from "@/style/variables";

function Title(props) {
  return (
    <TitleWrapper>
      <span className="title">{props.children}</span>
      <Icon size={18} type="arrow-right" iconClass="icon"></Icon>
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  display: flex;
  padding: 12px 0;
  cursor: pointer;

  .title {
    font-size: ${$fontSizeTitle};
    color: ${$fontColorTitle};
  }
  .icon {
    margin-left: 4px;
    color: ${$fontColorTitle};
  }
`;
