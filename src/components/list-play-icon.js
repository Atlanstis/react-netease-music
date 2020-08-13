import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Icon from "@/components/icon";

class PLayListIcon extends PureComponent {
  render() {
    if (this.props.active) {
      return (
        <Icon
          color="theme"
          size={12}
          hover={false}
          type={this.props.playingState ? "play" : "pause"}
        ></Icon>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    playingState: state.getIn(["musicPlayer", "playingState"]),
  };
};

export default connect(mapStateToProps, null)(PLayListIcon);
