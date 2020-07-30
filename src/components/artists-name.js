import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  $fontSizeXs,
  $fontColorPrimary,
  $fontColorTitle,
} from "@/style/variables";

function ArtistsText(props) {
  const { artists, className } = props;
  let length = artists.length;
  return (
    <p className={className}>
      {artists.map((artist, index) => {
        if (index === length - 1) {
          return (
            <Fragment key={artist.id}>
              <ArtistSpan>{artist.name}</ArtistSpan>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={artist.id}>
              <ArtistSpan>{artist.name}</ArtistSpan>
              <SplitSpan>/</SplitSpan>
            </Fragment>
          );
        }
      })}
    </p>
  );
}

ArtistsText.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object),
};

export default ArtistsText;

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
