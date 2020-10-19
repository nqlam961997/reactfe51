import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycle extends Component {
  // Super bị gạch do extension của visual code
  constructor(props) {
    super(props);
    this.state = {
      number: { index: 1 },
    };
    console.log("contructors");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("render");
    return (
      <div>
        <header>Header Component</header>
        <h1>LifeCycleNumber: {this.state.number}</h1>
        <button
          onClick={() => {
            let newNumber = { ...this.state.number };
            newNumber.index += 1;

            this.setState({
              number: newNumber,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <ChildComponent /> : ''} */}
        <ChildComponent number={this.state.number} />
      </div>
    );
  }

  componentDidMount() {
    // Gọi API tại didmount
    console.log("componentDidMount");
  }

  //   Hàm sẽ chạy khi setState or thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
}
