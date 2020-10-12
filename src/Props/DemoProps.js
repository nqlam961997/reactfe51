import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Lâm",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>DemoProps</h2>
        <FunctionProps
          // Cách truyền Props trong reactjs
          hoVaTen={this.state.ten}
          Lop={this.state.lop}
        />
        <ClassProps
          // Cách truyền Props trong reactjs
          hoVaTen={this.state.ten}
          Lop={this.state.lop}
        />
      </div>
    );
  }
}
