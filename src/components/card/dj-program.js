import React from "react";
import styled from "styled-components";
import ArtistsName from "@/components/artists-name";
import { genImgUrl } from "@/utils/common";
import {
  $fontSizeSm,
  $cardHoverColor,
  $fontColorTitle,
  $fontSize,
} from "@/style/variables";
import { textEllipsis, imgWrap } from "@/style/mixins";

function CardDjProgram(props) {
  let { card } = props;
  console.log(card);
  return (
    <CardWraper>
      <div className="img-wrap">
        <img src={genImgUrl(card.picUrl, 120)} alt={card.name} />
      </div>
      <div className="content">
        <p className="name">{card.name}</p>
        <ArtistsName
          type="dj"
          className="dj"
          artists={[card.program.dj]}
        ></ArtistsName>
      </div>
    </CardWraper>
  );
}

export default CardDjProgram;

const CardWraper = styled.div`
  display: flex;
  padding: 8px;
  font-size: ${$fontSizeSm};
  cursor: pointer;

  &:hover {
    background: ${$cardHoverColor};
  }
  div {
    flex-shrink: 0;
  }

  .img-wrap {
    position: relative;
    margin-right: 16px;
    border-radius: 4px;
    overflow: hidden;
    ${imgWrap(90)};
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    margin: 12px 0;
    overflow: hidden;

    .name {
      ${textEllipsis};
      font-size: ${$fontSize};
      color: ${$fontColorTitle};
    }

    .dj {
      ${textEllipsis};
    }
  }
`;
