import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";
import { formatNumber } from "@/utils/common";
import { genImgUrl } from "@/utils/business";
import Icon from "@/components/icon";
import ArtistsName from "@/components/artists-name";
import { absStretch, textEllipsis } from "@/style/mixins";
import { $$playCountWrap, $$descWrap } from "@/style/mixin-component";
import { $fontSizeSm } from "@/style/variables";

class MvCard extends Component {
  render() {
    const {
      props,
      props: { card },
    } = this;

    return (
      <MvCardWrapper className={classnames(props.className, "mv-card")}>
        <div className="img-wrap">
          <img src={genImgUrl(card.get("picUrl"), 500, 260)} alt="" />
          {card.get("playCount") ? (
            <div className="play-count-wrap" v-if="playCount">
              <Icon type="play-hollow" size={14} />
              {formatNumber(card.get("playCount"))}
            </div>
          ) : null}
          {card.get("copywriter") ? (
            <div className="desc-wrap">
              <span className="desc">{card.get("copywriter")}</span>
            </div>
          ) : null}
        </div>
        {card.get("name") ? (
          <p className="name" v-if="name">
            {card.get("name")}
          </p>
        ) : null}
        <ArtistsName
          className="author"
          artists={card.get("artists").toJS()}
        ></ArtistsName>
      </MvCardWrapper>
    );
  }
}

MvCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default MvCard;

const MvCardWrapper = styled.div`
  min-width: 140px;
  cursor: pointer;

  .img-wrap {
    position: relative;
    padding-top: 56%;

    img {
      ${absStretch}
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    ${$$playCountWrap};

    ${$$descWrap};

    &:hover {
      .play-count-wrap {
        visibility: hidden;
      }
    }
  }

  .name {
    margin-top: 8px;
    ${textEllipsis}
    font-size: ${$fontSizeSm};
  }

  .author {
    margin-top: 4px;
    ${textEllipsis};
  }
`;
