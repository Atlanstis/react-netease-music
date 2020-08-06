import React from "react";
import styled from "styled-components";
import Icon from "./icon";
import { $fontSizeTitle, $fontColorTitle, $black } from "@/style/variables";

function Title(props) {
  return (
    <TitleWrapper>
      <span>
        <span className="title">{props.children}</span>
        <Icon size={18} type="arrow-right" iconClass="icon"></Icon>
      </span>
    </TitleWrapper>
  );
}

export default Title;

const TitleWrapper = styled.div`
  display: flex;
  padding: 12px 0;

  & > span {
    cursor: pointer;
    :hover {
      .title,
      .icon {
        color: ${$black};
      }
    }
  }
  .title {
    font-size: ${$fontSizeTitle};
    color: ${$fontColorTitle};
  }
  .icon {
    padding-left: 4px;
    color: ${$fontColorTitle};
  }
`;
