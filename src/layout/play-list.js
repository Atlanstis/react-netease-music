import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import classnames from "classnames";
import SwitchBtn from "@/components/switch-btn";
import Icon from "@/components/icon";
import ListTable from "@/components/list-table";
import {
  $headerHeight,
  $miniPlayerHeight,
  $white,
  $textPrimary,
  $fontSizeMediumSm,
  $splitColor,
  $textColorMajor,
  $fontSize,
  $themeColor,
} from "@/style/variables";
import { boxShadow } from "@/style/mixins";
import { actionCreator } from "@/store/modules/music-player";
import { PLAY_LIST_TYPE } from "@/constants/song";

let btns = [
  {
    key: "list",
    name: "播放列表",
  },
  {
    key: "history",
    name: "历史记录",
  },
];

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.onBtnSelected = this.onBtnSelected.bind(this);
    this.state = {
      selectKey: btns[0].key,
    };
  }

  onBtnSelected(key) {
    this.setState({
      selectKey: key,
    });
  }

  isPlayList(selectKey) {
    return selectKey === "list";
  }

  onBtnClick(type, selectKey, disabled) {
    if (disabled) return;
    if (type === "cleanUp") {
      if (selectKey === "list") {
        this.props.cleanPlayList();
      } else if (selectKey === "history") {
        this.props.cleanPlayHistoryList();
      }
    }
  }

  render() {
    const { selectKey } = this.state;
    const { playList, playHistoryList, currentSong } = this.props;
    const isplayList = this.isPlayList(selectKey);
    const list = isplayList ? playList.toJS() : playHistoryList.toJS();
    const size = list.length;
    const colums = [
      {
        type: "playIcon",
        width: 20,
      },
      {
        type: "name",
        width: 180,
      },
      {
        type: "artist",
        width: 120,
      },
      {
        type: "duration",
        width: 60,
      },
    ];
    if (!isplayList) {
      colums[0].type = "empty";
    }
    return (
      <PlayListWrap>
        <div className="switch">
          <SwitchBtn btns={btns} onBtnSelected={this.onBtnSelected}></SwitchBtn>
        </div>
        <div className="title">
          <span>总{size}首</span>
          <p className="btns">
            {isplayList ? (
              <span className={classnames("btn", { disabled: size === 0 })}>
                <Icon type="add" size={20}></Icon>
                <span>收藏全部</span>
              </span>
            ) : null}
            <span
              onClick={() => {
                this.onBtnClick("cleanUp", selectKey, size === 0);
              }}
              className={classnames("btn", { disabled: size === 0 })}
            >
              <Icon type="clean-up" size={20}></Icon>
              <span>清空</span>
            </span>
          </p>
        </div>
        <div className="play-list">
          <ListTable
            colums={colums}
            list={list}
            activeId={isplayList ? currentSong.get("id") : null}
          ></ListTable>
        </div>
      </PlayListWrap>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentSong: state.getIn(["musicPlayer", "currentSong"]),
    playList: state.getIn(["musicPlayer", "playList"]),
    playHistoryList: state.getIn(["musicPlayer", "playHistoryList"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cleanPlayList() {
      dispatch(actionCreator.setCurrentSongAction({}, PLAY_LIST_TYPE.CLEAN_UP));
      dispatch(actionCreator.setPlayingStateAction(false));
      dispatch(actionCreator.setPlayListAction([], PLAY_LIST_TYPE.CLEAN_UP));
    },
    cleanPlayHistoryList() {
      dispatch(actionCreator.setPlayHistoryAction({}, PLAY_LIST_TYPE.CLEAN_UP));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayList);

const PlayListWrap = styled.div`
  position: fixed;
  z-index: 99;
  top: ${$headerHeight};
  right: 0;
  width: 400px;
  bottom: ${$miniPlayerHeight};
  background: ${$white};
  display: flex;
  flex-direction: column;
  ${boxShadow};

  .switch {
    margin: 20px auto;
  }
  .title {
    line-height: 20px;
    margin: 0 20px 10px;
    color: ${$textPrimary};
    font-size: ${$fontSizeMediumSm};
    display: flex;
    justify-content: space-between;

    > span {
      cursor: default;
    }
    .btns {
      .btn {
        display: inline-block;
        color: ${$textColorMajor};
        cursor: pointer;
        padding: 0 12px;

        &.disabled {
          color: ${$textPrimary} !important;
          cursor: default !important;
          i {
            cursor: default !important;
          }
        }
        i {
          vertical-align: middle;
        }
        span {
          margin-left: 8px;
          vertical-align: middle;
          font-size: ${$fontSize};
        }
      }

      .btn + .btn {
        position: relative;
        :before {
          content: "";
          background: ${$splitColor};
          position: absolute;
          width: 1px;
          height: 60%;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
        }
      }
    }
  }
  .play-list {
    flex: 1;
    overflow: scroll;
    margin: 0 10px;

    .active {
      .list-table_column_name .name {
        color: ${$themeColor} !important;
      }
      .list-table_column_artist .artist {
        color: ${$themeColor} !important;
      }
    }
  }
`;
