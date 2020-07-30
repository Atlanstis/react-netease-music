import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Carousel } from "@/components/carousel";
import { genImgUrl } from "@/utils/common";

function Banner(props) {
  let { banners } = props;
  let html = banners.size ? (
    <Carousel height="200px">
      {props.banners.map((banner) => {
        return (
          <BannerImg
            key={banner.get("scm")}
            src={genImgUrl(banner.get("imageUrl"), 1000, 400)}
          ></BannerImg>
        );
      })}
    </Carousel>
  ) : (
    <NoDataPlaceholder></NoDataPlaceholder>
  );
  return html;
}

const mapStateToProps = (state) => {
  return {
    banners: state.getIn(["recommend", "banners"]),
  };
};

export default connect(mapStateToProps, null)(Banner);

const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const NoDataPlaceholder = styled.div`
  height: 200px;
  width: 100%;
`;
