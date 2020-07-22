import React, { Component } from "react";
import styled from "styled-components";
import { $headerInputColor, $headerInputBgColor } from "@/style/variables";
import Icon from "@/components/icon";

class Search extends Component {
  render() {
    return (
      <SearchWrapper>
        <SearchInput>
          <SearchInputInner></SearchInputInner>
          <SearchInputPrefix>
            <Icon size={14} type="search" hover={false}></Icon>
          </SearchInputPrefix>
        </SearchInput>
      </SearchWrapper>
    );
  }
}

export default Search;

const SearchWrapper = styled.div`
  position: relative;
  width: 150px;
`;

const SearchInput = styled.div`
  position: relative;
  font-size: 12px;
  display: inline-block;
  width: 100%;
`;

const SearchInputInner = styled.input.attrs({
  placeholder: "搜索",
  type: "text",
})`
  height: 24px;
  line-height: 24px;
  background: ${$headerInputBgColor};
  border: none;
  color: ${$headerInputColor};
  -webkit-appearance: none;
  border-radius: 12px;
  box-sizing: border-box;
  display: inline-block;
  font-size: inherit;
  outline: 0;
  padding: 0 15px;
  padding-left: 30px;
  width: 100%;
`;

const SearchInputPrefix = styled.span`
  position: absolute;
  left: 8px;
  top: 5px;
  text-align: center;
  height: 100%;
  color: #c0c4cc;
`;
