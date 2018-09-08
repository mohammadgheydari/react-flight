import React, { Component } from "react";
import "./radioButton.css";
class ButtonLoader extends Component {
  render() {
    return (
      <div
        className={(this.props.isInline ? "md-radio-inline" : "") + " md-radio"}
      >
        <input
          id={this.props.inputId}
          type="radio"
          name={this.props.inputName}
          defaultChecked={this.props.checked ? true : false}
        />
        <label htmlFor={this.props.inputId}>{this.props.text}</label>
      </div>
    );
  }
}

export default ButtonLoader;
