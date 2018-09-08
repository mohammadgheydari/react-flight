import React, { Component } from "react";
import "./checkbox.css";
import PropTypes from "prop-types";
class ButtonLoader extends Component {
  render() {
    const classes =
      "md-checkbox " + this.props.inlineClass + " " + this.props.color;
    return (
      <div className={classes}>
        <label>
          <input
            type="checkbox"
            defaultChecked={this.props.checked ? true : false}
          />
          <span className="md-checkbox-material">
            <span className="check" />
          </span>
          <span className="md-checkbox-label">{this.props.text}</span>
        </label>
      </div>
    );
  }
}
ButtonLoader.propTypes = {
  checked: PropTypes.bool,
  text: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};
export default ButtonLoader;
