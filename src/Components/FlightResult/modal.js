import React, { Component } from "react";
import Rodal from "rodal";

import "rodal/lib/rodal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show = () => {
    this.setState({ visible: true });
    console.log(this.state.visible);
  };

  hide = () => {
    this.setState({ visible: false });
    console.log(this.state.visible);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.show} className={this.props.btnClasses}>
          {this.props.btnText}
        </button>
        <Rodal
          visible={this.state.visible}
          className={this.props.id}
          animation={this.props.animation}
          duration={this.props.duration}
          closeOnEsc={this.props.closeOnEsc}
          onClose={this.hide}
        >
          <h3>{this.props.heading}</h3>
          <div>{this.props.body}</div>
        </Rodal>
      </React.Fragment>
    );
  }
}

export default Modal;

// import React from "react";
// import Rodal from "rodal";

// // include styles
// import "rodal/lib/rodal.css";

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { visible: false };
//   }

//   show() {
//     this.setState({ visible: true });
//   }

//   hide() {
//     this.setState({ visible: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.show.bind(this)}>show</button>

//         <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
//           <div>Content</div>
//         </Rodal>
//       </div>
//     );
//   }
// }
// export default Modal;
