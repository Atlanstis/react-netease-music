import React, { Component } from "react";
import PropTypes from "prop-types";
import { hasParent } from "@/utils/dom";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.clickEvent);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.clickEvent);
  }

  clickEvent(e) {
    const triggerEl = e.target;
    const rootEl = this.refs.el;
    let reserveDom = this.props.reserveDom.map((dom) => {
      return document.querySelector(dom);
    });
    if (!hasParent(triggerEl, reserveDom.concat(rootEl))) {
      this.props.onToggleClose();
    }
  }

  render() {
    return <div ref="el">{this.props.children}</div>;
  }
}

Toggle.propTypes = {
  reserveDom: PropTypes.arrayOf(PropTypes.string),
};

Toggle.defaultProps = {
  reserveDom: [],
};

export default Toggle;
