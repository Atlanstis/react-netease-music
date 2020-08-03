import React from "react";
import PropTypes from "prop-types";
import { genImgUrl, pad } from "@/utils/common";
import PlayIcon from "@/components/play-icon";
import ArtistsName from "@/components/artists-name";
import {
  $fontSizeSm,
  $cardHoverColor,
  $fontColorTitle,
  $fontSize,
} from "@/style/variables";
import { flexCenter, absCenter, textEllipsis, imgWrap } from "@/style/mixins";
import styled from "styled-components";

function Songs(props) {
  let { card, orderIndex } = props;
  return (
    <SongCard>
      <div className="order-wrap">
        <span>{pad(orderIndex)}</span>
      </div>
      <div className="img-wrap">
        <img src={genImgUrl(card.picUrl, 120)} alt="" />
        <PlayIcon size={22} className="play-icon" />
      </div>
      <div className="song-content">
        <p className="song-name">{card.name}</p>
        <ArtistsName
          className="singer"
          artists={card.song.artists}
        ></ArtistsName>
      </div>
    </SongCard>
  );
}

Songs.propTypes = {
  card: PropTypes.object.isRequired,
  orderIndex: PropTypes.number.isRequired,
};

export default Songs;

const SongCard = styled.div`
  display: flex;
  padding: 8px;
  font-size: ${$fontSizeSm};
  cursor: pointer;

  div {
    flex-shrink: 0;
  }

  &:hover {
    background: ${$cardHoverColor};
  }
  .order-wrap {
    ${flexCenter};
    width: 30px;
    margin-right: 8px;
  }

  .img-wrap {
    position: relative;
    margin-right: 8px;
    border-radius: 4px;
    overflow: hidden;
    ${imgWrap(60)};

    .play-icon {
      ${absCenter};
    }
  }

  .song-content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    overflow: hidden;

    .song-name {
      ${textEllipsis};
      font-size: ${$fontSize};
      color: ${$fontColorTitle};
    }

    .singer {
      ${textEllipsis};
    }
  }
`;
