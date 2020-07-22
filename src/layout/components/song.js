import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Icon from "@/components/icon";
import { imgWrap, absStretch, absCenter, textEllipsis } from "@/style/mixins";
import {
  $fontSizeXs,
  $fontColorTitle,
  $fontColorPrimary,
} from "@/style/variables";

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCurrentSong: false,
    };
  }

  render() {
    let { hasCurrentSong } = this.state;
    return (
      <SongWrapper>
        {hasCurrentSong ? (
          <Fragment>
            <ImgWrapper width={40}>
              <ImgMask className="mask">
                <Icon type="expand" size={32} color="white"></Icon>
              </ImgMask>
              <img alt="" src="" />
            </ImgWrapper>
            <Content>
              <ContentTop>
                <span className="name">歌名</span>
                <span className="split">-</span>
                <span className="artists">歌手</span>
              </ContentTop>
              <ContentTime>
                <span>00:00</span>
                <span className="split">/</span>
                <span>04:32</span>
              </ContentTime>
            </Content>
          </Fragment>
        ) : null}
      </SongWrapper>
    );
  }
}

export default Song;

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
  ${imgWrap}

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
    max-width: 100px;
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
    max-width: 60px;
    font-size: ${$fontSizeXs};
    color: ${$fontColorPrimary};
    cursor: pointer;
    ${textEllipsis};

    &:hover {
      color: ${$fontColorTitle};
    }
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
