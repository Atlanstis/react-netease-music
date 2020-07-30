import React from "react";
import { connect } from "react-redux";
import Title from "@/components/title";
import CardSongs from "@/components/card/recommed-song";
import styled from "styled-components";
const SPLIT_LINE = 2;

function getOrder(listIndex, index, lineSums) {
  return listIndex * lineSums + index + 1;
}

function LatestSongs(props) {
  const { songs } = props;
  if (songs.size) {
    const lineSums = Math.ceil(songs.size / SPLIT_LINE);
    let songsFormat = songs.toJS();
    let thunkedList = [];
    for (let i = 0; i < SPLIT_LINE; i++) {
      thunkedList[i] = songsFormat.slice(i * lineSums, (i + 1) * lineSums);
    }
    return (
      <LatestSongsWrapper>
        <Title>最新音乐</Title>
        <div className="list-wrap">
          {thunkedList.map((list, listIndex) => {
            return (
              <div className="list" key={`list-${listIndex}`}>
                {list.map((card, index) => {
                  return (
                    <CardSongs
                      key={card.id}
                      card={card}
                      orderIndex={getOrder(listIndex, index, lineSums)}
                    ></CardSongs>
                  );
                })}
              </div>
            );
          })}
        </div>
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
