import React, { Component } from "react";
import Loading from "./loading.svg";
import MaterialIcon from "material-icons-react";
import "./buttonLoader.css";
class ButtonLoader extends Component {
  render() {
    return (
      <button
        className={this.props.classes + " buttonLoader"}
        type={this.props.type}
        loading={this.props.loading}
        disabled={this.props.loading ? "disabled" : ""}
      >
        <span>{this.props.text}</span>
        {this.props.loading ? (
          <img
            src={Loading}
            width={this.props.LoadingWidth}
            height={this.props.LoadingHeight}
          />
        ) : (
          <MaterialIcon
            icon={this.props.iconName}
            size={this.props.iconSize}
            color={this.props.iconColor}
          />
        )}
      </button>
    );
  }
}

export default ButtonLoader;
