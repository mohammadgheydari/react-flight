import React, { Component } from "react";
import "./checkbox.css";
class ButtonLoader extends Component {
  render() {
    const classes = "md-checkbox " + this.props.inlineClass + " " +  this.props.color;  
    return (
      <div className={classes} >
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

export default ButtonLoader;
