import React, { Component } from "react";
import PropTypes from "prop-types";
import { genImgUrl, pad } from "@/utils/common";
import PlayIcon from "@/components/play-icon";
import ArtistsName from "@/components/artists-name";
import {
  $fontSizeSm,
  $cardHoverColor,
  $fontColorTitle,
  $fontSize,
  $fontColorPrimary,
} from "@/style/variables";
import { flexCenter, absCenter, textEllipsis, imgWrap } from "@/style/mixins";
import styled from "styled-components";

class Song extends Component {
  constructor(props) {
    super(props);
    this.onSongCardClick = this.onSongCardClick.bind(this);
  }

  onSongCardClick() {}

  render() {
    let {
      card,
      card: { song },
      orderIndex,
    } = this.props;
    let songAlias = null;
    if (song.alias.length) {
      songAlias = <span className="song-alias">（{card.song.alias[0]}）</span>;
    }
    return (
      <SongCard>
        <div className="img-wrap" onClick={this.onSongCardClick}>
          <img src={genImgUrl(card.picUrl, 120)} alt="" />
          <PlayIcon size={22} className="play-icon" />
        </div>
        <div className="order-wrap">
          <span>{pad(orderIndex)}</span>
        </div>
        <div className="song-content">
          <p className="song-name">
            {card.name}
            {songAlias}
          </p>
          <ArtistsName className="singer" artists={song.artists}></ArtistsName>
        </div>
      </SongCard>
    );
  }
}

Song.propTypes = {
  card: PropTypes.object.isRequired,
  orderIndex: PropTypes.number.isRequired,
};

export default Song;

const SongCard = styled.div`
  display: flex;
  padding: 8px;
  font-size: ${$fontSizeSm};
  cursor: default;

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
    color: ${$fontColorPrimary};
  }

  .img-wrap {
    position: relative;
    margin-right: 8px;
    border-radius: 4px;
    overflow: hidden;
    cursor: pointer;
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
      .song-alias {
        color: ${$fontColorPrimary};
      }
    }

    .singer {
      ${textEllipsis};
    }
  }
`;
