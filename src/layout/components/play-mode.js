import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Icon from "@/components/icon";
import { actionCreator } from "@/store/modules/music-player";
import { getPlayMode } from "@/utils/business";

function PlayMode() {
  const playMode = useSelector((state) =>
    state.getIn(["musicPlayer", "playMode"])
  );
  const hasCardiac = useSelector((state) =>
    state.getIn(["musicPlayer", "hasCardiac"])
  );
  const dispatch = useDispatch();

  const playModeMap = getPlayMode(hasCardiac);

  return (
    <Icon
      size={24}
      type={playModeMap[playMode].icon}
      color="icon"
      onClick={() => {
        dispatch(actionCreator.setPlayModeAction());
      }}
    ></Icon>
  );
}

export default PlayMode;
