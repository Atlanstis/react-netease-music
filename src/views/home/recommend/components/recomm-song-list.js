import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "@/components/title";
import { genImgUrl } from "@/utils/common";
import { $white, $fontSizeSm } from "@/style/variables";
import { textEllipsis } from "@/style/mixins";
import PlayIcon from "@/components/play-icon";

function RecommSongList(props) {
  return props.list.size ? (
    <div>
      <Title>推荐歌曲</Title>
      <ListWrapper>
        {props.list.map((card) => {
          return (
            <Card className="playlist-card" key={card.get("id")}>
              <div className="img-wrap">
                <img src={genImgUrl(card.get("picUrl"))} alt="" />
                {card.get("copywriter") ? (
                  <div className="desc-wrap">
                    <span className="desc">{card.get("copywriter")}</span>
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

    .desc-wrap {
      position: absolute;
      padding: 6px;
      left: 0;
      right: 0;
      top: 0;
      background-color: rgba(0, 0, 0, 0.4);
      transform: translateY(-100%);
      transition: all 0.3s;

      .desc {
        color: ${$white};
        font-size: ${$fontSizeSm};
      }
    }

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
      .desc-wrap {
        transform: translateY(0);
      }

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
