import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  $fontSizeXs,
  $fontColorPrimary,
  $textColorMajor,
} from "@/style/variables";
import { textEllipsis } from "@/style/mixins";

const keyMap = {
  dj: { nameKey: "nickname", idKey: "userId" },
  singer: { nameKey: "name", idKey: "id" },
};

function ArtistsName(props) {
  const { artists, className, type } = props;
  let { nameKey, idKey } = keyMap[type];

  let length = artists.length;
  return (
    <ArtistP className={className}>
      {artists.map((artist, index) => {
        if (index === length - 1) {
          return (
            <Fragment key={artist[idKey]}>
              <span className="artist">{artist[nameKey]}</span>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={artist[idKey]}>
              <span className="artist">{artist[nameKey]}</span>
              <span className="split">/</span>
            </Fragment>
          );
        }
      })}
    </ArtistP>
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

const ArtistP = styled.p`
  ${textEllipsis};

  .artist {
    font-size: ${$fontSizeXs};
    color: ${$fontColorPrimary};
    cursor: pointer;
    &:hover {
      color: ${$textColorMajor};
    }
  }
  .split {
    font-size: ${$fontSizeXs};
    margin: 0 4px;
    color: ${$fontColorPrimary};
  }
`;
