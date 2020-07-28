import React, { Component } from "react";
import classnames from "classnames";

const CARD_SCALE = 0.83;

class CarouselItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: true,
      inStage: false,
      animating: false,
    };
  }

  translateItem(index, activeIndex, oldIndex) {
    const { type, direction, itemLength, loop } = this.props;
    let { animating, active, translate, inStage, scale } = this.state;
    if (type !== "card" && oldIndex !== undefined) {
      animating = index === activeIndex || index === oldIndex;
    }
    if (index !== activeIndex && itemLength > 2 && loop) {
      index = this.processIndex(index, activeIndex, itemLength);
    }
    if (type === "card") {
      if (direction === "vertical") {
        console.warn("vertical direction is not supported in card mode");
      }
      inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
      active = index === activeIndex;
      translate = this.calcCardTranslate(index, activeIndex, inStage);
      scale = this.active ? 1 : CARD_SCALE;
    } else {
      active = index === activeIndex;
      const isVertical = direction === "vertical";
      translate = this.calcTranslate(index, activeIndex, isVertical);
    }
    this.ready = true;
    this.setState(() => {
      return {
        animating,
        active,
        translate,
        inStage,
        scale,
      };
    });
  }

  processIndex(index, activeIndex, length) {
    if (activeIndex === 0 && index === length - 1) {
      return -1;
    } else if (activeIndex === length - 1 && index === 0) {
      return length;
    } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
      return length + 1;
    } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
      return -2;
    }
    return index;
  }

  calcCardTranslate(index, activeIndex, inStage) {
    const parentWidth = this.props.getEl().offsetWidth;
    if (inStage) {
      return (parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1)) / 4;
    } else if (index < activeIndex) {
      return (-(1 + CARD_SCALE) * parentWidth) / 4;
    } else {
      return ((3 + CARD_SCALE) * parentWidth) / 4;
    }
  }

  calcTranslate(index, activeIndex, isVertical) {
    const $el = this.props.getEl();
    const distance = $el[isVertical ? "offsetHeight" : "offsetWidth"];
    return distance * (index - activeIndex);
  }

  render() {
    let { type, children, direction } = this.props;
    let {
      scale,
      translate,
      ready,
      active,
      inStage,
      hover,
      animating,
    } = this.state;
    if (!ready) {
      return null;
    }

    const carouselItemCls = classnames("carousel__item", {
      "carousel__item--card": type === "card",
      "is-active": active,
      "is-in-stage": inStage,
      "is-hover": hover,
      "is-animating": animating,
    });
    const translateType =
      direction === "vertical" ? "translateY" : "translateX";
    const value = `${translateType}(${translate}px) scale(${scale})`;
    const itemStyle = {
      transform: value,
    };
    return (
      <div className={carouselItemCls} style={itemStyle}>
        {type === "card" ? (
          <div
            style={{ display: !active ? "" : "null" }}
            className="carousel__mask"
          ></div>
        ) : null}
        {children}
      </div>
    );
  }
}

export default CarouselItem;
