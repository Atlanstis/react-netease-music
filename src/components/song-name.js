import React from "react";
import styled from "styled-components";
import {
  $textColorMajor,
  $fontSize,
  $fontColorPrimary,
} from "@/style/variables";
import { textEllipsis } from "@/style/mixins";

function SongName(props) {
  const { name, alias } = props;
  let songAlias = null;
  if (alias.length) {
    songAlias = <span className="song-alias">（{alias[0]}）</span>;
  }
  return (
    <SongNameWrap>
      <span className="name">{name}</span>
      {songAlias}
    </SongNameWrap>
  );
}

export default SongName;

const SongNameWrap = styled.p`
  ${textEllipsis};
  font-size: ${$fontSize};
  color: ${$textColorMajor};
  cursor: default;

  .song-alias {
    color: ${$fontColorPrimary};
  }
`;
