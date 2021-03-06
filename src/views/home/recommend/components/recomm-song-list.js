import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "@/components/title";
import { genImgUrl } from "@/utils/business";
import { $white, $fontSizeSm } from "@/style/variables";
import { textEllipsis } from "@/style/mixins";
import { $$playCountWrap } from "@/style/mixin-component";
import PlayIcon from "@/components/play-icon";
import Icon from "@/components/icon";
import { formatNumber } from "@/utils/common";

function RecommSongList(props) {
  return props.list.size ? (
    <div>
      <Title>推荐歌单</Title>
      <ListWrapper>
        {props.list.map((card) => {
          return (
            <Card className="playlist-card" key={card.get("id")}>
              <div className="img-wrap">
                <img src={genImgUrl(card.get("picUrl"))} alt="" />
                {card.get("playCount") ? (
                  <div className="play-count-wrap" v-if="playCount">
                    <Icon type="play-hollow" size={14} />
                    {formatNumber(card.get("playCount"))}
                  </div>
                ) : null}
                <PlayIcon size={36} className="play-icon"></PlayIcon>
              </div>
              <p className="name">{card.get("name")}</p>
            </Card>
          );
        })}
      </ListWrapper>
    </div>
  ) : null;
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["recommend", "recommSongList"]),
  };
};

export default connect(mapStateToProps, null)(RecommSongList);

const ListWrapper = styled.div`
  margin: 0 -4px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  position: relative;
  width: calc(20% - 8px);
  margin: 4px;
  margin-bottom: 32px;
  cursor: pointer;

  .img-wrap {
    position: relative;
    width: 100%;
    padding-top: 100%;
    margin-bottom: 8px;
    border-radius: 4px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    ${$$playCountWrap};

    .play-icon {
      opacity: 0;
      position: absolute;
      right: 4px;
      bottom: 4px;
      font-size: 24px;
      transition: all 0.3s;
      color: ${$white};
    }

    &:hover {
      .play-icon {
        opacity: 1;
      }
    }
  }
  .name {
    font-size: ${$fontSizeSm};
    ${textEllipsis}
  }
`;
