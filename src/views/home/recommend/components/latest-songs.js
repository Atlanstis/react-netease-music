import React from "react";
import { connect } from "react-redux";
import Title from "@/components/title";
import CardSong from "@/components/card/recommed-song";
import ListSplit from "@/components/list-split";
import styled from "styled-components";

function LatestSongs(props) {
  const { songs } = props;
  if (songs.size) {
    let songList = songs.toJS();
    return (
      <LatestSongsWrapper>
        <Title>最新音乐</Title>
        <ListSplit list={songList} CardEle={CardSong}></ListSplit>
      </LatestSongsWrapper>
    );
  }

  return null;
}

const mapStateToProps = (state) => {
  return {
    songs: state.getIn(["recommend", "latestSongs"]),
  };
};

export default connect(mapStateToProps, null)(LatestSongs);

const LatestSongsWrapper = styled.div`
  margin-bottom: 36px;
  .list-wrap {
    display: flex;

    .list {
      flex: 1;
      overflow: hidden;
    }
  }
`;
