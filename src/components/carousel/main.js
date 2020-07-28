import React, { Children, Component } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import classnames from "classnames";
import CarouselItem from "./item";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.getEl = this.getEl.bind(this);
    this.state = {
      itemLength: 0,
      activeIndex: -1,
      timer: null,
      hover: false,
    };
    this.playSlides = this.playSlides.bind(this);
  }

  componentDidMount() {
    this.setState(
      () => {
        return {
          itemLength: Children.count(this.props.children),
        };
      },
      () => {
        let { itemLength } = this.state;
        let { initialIndex } = this.props;
        if (initialIndex < itemLength && initialIndex >= 0) {
          this.setState(
            () => {
              return {
                activeIndex: initialIndex,
              };
            },
            () => {
              if (itemLength > 0) {
                this.setActiveItem(this.props.initialIndex);
              }
            }
          );
        }
        this.startTimer();
      }
    );
  }

  componentWillUnmount() {
    this.pauseTimer();
  }

  startTimer() {
    const { interval, autoplay } = this.props;
    if (interval <= 0 || !autoplay || this.timer) return;
    this.timer = setInterval(this.playSlides, interval);
  }

  pauseTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  playSlides() {
    let { activeIndex, itemLength } = this.state;
    let oldIndex = activeIndex;
    const { loop } = this.props;
    if (activeIndex < itemLength - 1) {
      activeIndex++;
    } else if (loop) {
      activeIndex = 0;
    }
    this.setState(
      () => {
        return { activeIndex };
      },
      () => {
        this.resetItemPosition(oldIndex);
      }
    );
  }

  setActiveItem(index) {
    if (isNaN(index) || index !== Math.floor(index)) {
      console.warn("index must be an integer.");
      return;
    }
    let { activeIndex, itemLength } = this.state;
    const { loop } = this.props;
    const length = itemLength;
    const oldIndex = activeIndex;
    if (index < 0) {
      activeIndex = loop ? length - 1 : 0;
    } else if (index >= length) {
      activeIndex = loop ? 0 : length - 1;
    } else {
      activeIndex = index;
    }
    this.setState(
      () => {
        return { activeIndex };
      },
      () => {
        if (oldIndex === activeIndex) {
          this.resetItemPosition(oldIndex);
        }
      }
    );
  }

  resetItemPosition(oldIndex) {
    const { activeIndex } = this.state;
    this.$items.forEach((item, index) => {
      item.translateItem(index, activeIndex, oldIndex);
    });
  }

  getEl() {
    return this.refs.$el;
  }

  handleMouseEnter() {
    this.setState(() => {
      return { hover: true };
    });
    this.pauseTimer();
  }

  handleMouseLeave() {
    this.setState(() => {
      return { hover: false };
    });
    this.startTimer();
  }

  render() {
    let { props, state } = this;
    let carouselClasses = classnames(
      "carousel",
      "carousel--" + props.direction,
      { "carousel--card": props.type === "card" }
    );
    const arrowDisplay =
      props.arrow !== "never" && props.direction !== "vertical";
    const arrowLeftShow =
      (props.arrow === "always" || state.hover) &&
      (props.loop || state.activeIndex > 0);
    const arrowRightShow =
      (props.arrow === "always" || state.hover) &&
      (props.loop || state.activeIndex < state.itemLength - 1);

    return (
      <div
        className={carouselClasses}
        ref="$el"
        onMouseEnter={() => {
          this.handleMouseEnter();
        }}
        onMouseLeave={() => {
          this.handleMouseLeave();
        }}
      >
        <div className="carousel__container" style={{ height: props.height }}>
          {arrowDisplay ? (
            <CSSTransition
              timeout={300}
              classNames="carousel-arrow-left"
              in={arrowLeftShow}
            >
              <button
                type="button"
                className={classnames(
                  "carousel__arrow",
                  "carousel__arrow--left",
                  { "carousel__arrow-opacity": props.arrow === "hover" }
                )}
              >
                <i className="iconfont icon-arrow-left"></i>
              </button>
            </CSSTransition>
          ) : null}
          {arrowDisplay ? (
            <CSSTransition
              timeout={300}
              classNames="carousel-arrow-right"
              in={arrowRightShow}
            >
              <button
                type="button"
                className={classnames(
                  "carousel__arrow",
                  "carousel__arrow--right",
                  { "carousel__arrow-opacity": props.arrow === "hover" }
                )}
              >
                <i className="iconfont icon-arrow-right"></i>
              </button>
            </CSSTransition>
          ) : null}
          {Children.map(props.children, (child, index) => {
            return (
              <CarouselItem
                ref={($items) => {
                  if (index === 0) {
                    this.$items = [$items];
                  } else {
                    this.$items.push($items);
                  }
                }}
                loop={props.loop}
                type={props.type}
                direction={props.direction}
                itemLength={state.itemLength}
                getEl={this.getEl}
              >
                {child}
              </CarouselItem>
            );
          })}
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  type: PropTypes.string,
  height: PropTypes.string.isRequired,
  indicatorPosition: PropTypes.string,
  loop: PropTypes.bool,
  initialIndex: PropTypes.number,
  autoplay: PropTypes.bool,
  interval: PropTypes.number,
  arrow: PropTypes.oneOf(["always", "hover", "never"]),
};

Carousel.defaultProps = {
  direction: "horizontal",
  type: "card",
  indicatorPosition: "",
  loop: true,
  initialIndex: 0,
  autoplay: true,
  interval: 3000,
  arrow: "hover",
};

export default Carousel;
