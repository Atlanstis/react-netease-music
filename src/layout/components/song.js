import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Icon from "@/components/icon";
import ArtistsName from "@/components/artists-name";
import { formatTime } from "@/utils/common";
import { imgWrap, absStretch, absCenter, textEllipsis } from "@/style/mixins";
import {
  $fontSizeXs,
  $fontColorTitle,
  $fontColorPrimary,
} from "@/style/variables";

class Song extends Component {
  render() {
    const { currentSong, currentTime } = this.props;
    const hasCurrentSong = currentSong.get("id");
    return (
      <SongWrapper>
        {hasCurrentSong ? (
          <Fragment>
            <ImgWrapper>
              <ImgMask className="mask">
                <Icon type="expand" size={32} color="white"></Icon>
              </ImgMask>
              <img
                alt={currentSong.get("name")}
                src={currentSong.get("picUrl")}
              />
            </ImgWrapper>
            <Content>
              <ContentTop>
                <span className="name">{currentSong.get("name")}</span>
                <span className="split">-</span>
                <ArtistsName
                  className="artists"
                  artists={currentSong.get("artists").toJS()}
                ></ArtistsName>
              </ContentTop>
              <ContentTime>
                <span>{formatTime(currentTime)}</span>
                <span className="split">/</span>
                <span>{formatTime(currentSong.get("durationSec"))}</span>
              </ContentTime>
            </Content>
          </Fragment>
        ) : null}
      </SongWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.getIn(["musicPlayer", "currentSong"]),
    currentTime: state.getIn(["musicPlayer", "currentTime"]),
  };
};

export default connect(mapStateToProps, null)(Song);

const SongWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  position: relative;
  margin-right: 8px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  ${imgWrap(40)}

  :hover {
    img {
      filter: blur(2px);
    }
    .mask {
      background: rgba(0, 0, 0, 0.2);
      .iconfont {
        visibility: visible;
      }
    }
  }
`;

const ImgMask = styled.div`
  ${absStretch}
  z-index: 1;

  .iconfont {
    visibility: hidden;
    ${absCenter}
  }
`;

const Content = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContentTop = styled.div`
  display: flex;
  align-items: flex-end;
  white-space: nowrap;

  .name {
    max-width: 140px;
    color: ${$fontColorTitle};
    cursor: pointer;
    ${textEllipsis};
  }
  .split {
    font-size: ${$fontSizeXs};
    margin: 0 4px;
    color: ${$fontColorPrimary};
  }
  .artists {
    max-width: 100px;
  }
`;

const ContentTime = styled.div`
  font-size: ${$fontSizeXs};
  color: ${$fontColorPrimary};
  cursor: default;

  .split {
    margin: 0 4px;
  }
`;
