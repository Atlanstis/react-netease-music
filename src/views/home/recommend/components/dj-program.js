import React from "react";
import { connect } from "react-redux";
import Title from "@/components/title";
import styled from "styled-components";
import ListSplit from "@/components/list-split";
import CardDjProgram from "@/components/card/dj-program";

function DjProgram(props) {
  const { programs } = props;
  if (programs.size) {
    let list = programs.toJS();
    return (
      <DjProgramWrap>
        <Title>主播电台</Title>
        <ListSplit list={list} CardEle={CardDjProgram}></ListSplit>
      </DjProgramWrap>
    );
  }

  return null;
}

const mapStateToProps = (state) => {
  return { programs: state.getIn(["recommend", "djProgram"]) };
};

export default connect(mapStateToProps, null)(DjProgram);

const DjProgramWrap = styled.div`
  margin-bottom: 36px;
`;
