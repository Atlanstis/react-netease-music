import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { listMixin } from "@/style/mixins";
import Title from "@/components/title";
import MvCard from "@/components/card/mv";

function RecommMvs(props) {
  let { list } = props;
  if (list.size) {
    return (
      <MvsWrapper>
        <Title>推荐MV</Title>
        <ul className="list-wrap">
          {list.map((card) => {
            return (
              <MvCard
                key={card.get("id")}
                card={card}
                className="list-item"
              ></MvCard>
            );
          })}
        </ul>
      </MvsWrapper>
    );
  }
  return null;
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["recommend", "recommMvs"]),
  };
};

export default connect(mapStateToProps, null)(RecommMvs);

const MvsWrapper = styled.div`
  ${listMixin("25%")}
`;
