import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "@/components/icon";
import { actionCreator } from "@/store/modules/system";

function PlayListIcon() {
  const playListShow = useSelector((state) =>
    state.getIn(["system", "playListShow"])
  );
  const dispatch = useDispatch();
  return (
    <Icon
      size={24}
      type="playlist"
      color={playListShow ? "theme" : ""}
      onClick={() => {
        dispatch(actionCreator.setPlayListShow(!playListShow));
      }}
    ></Icon>
  );
}

export default PlayListIcon;
