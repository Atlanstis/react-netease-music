import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  $fontSizeXs,
  $fontColorPrimary,
  $fontColorTitle,
} from "@/style/variables";

const keyMap = {
  dj: { nameKey: "nickname", idKey: "userId" },
  singer: { nameKey: "name", idKey: "id" },
};

function ArtistsName(props) {
  const { artists, className, type } = props;
  let { nameKey, idKey } = keyMap[type];

  let length = artists.length;
  return (
    <p className={className}>
      {artists.map((artist, index) => {
        if (index === length - 1) {
          return (
            <Fragment key={artist[idKey]}>
              <ArtistSpan>{artist[nameKey]}</ArtistSpan>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={artist[idKey]}>
              <ArtistSpan>{artist[nameKey]}</ArtistSpan>
              <SplitSpan>/</SplitSpan>
            </Fragment>
          );
        }
      })}
    </p>
  );
}

ArtistsName.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string,
};

ArtistsName.defaultProps = {
  artists: [],
  type: "singer",
};

export default ArtistsName;

const ArtistSpan = styled.span`
  font-size: ${$fontSizeXs};
  color: ${$fontColorPrimary};
  cursor: pointer;
  &:hover {
    color: ${$fontColorTitle};
  }
`;

const SplitSpan = styled.span`
  font-size: ${$fontSizeXs};
  margin: 0 4px;
  color: ${$fontColorPrimary};
`;
