import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("contructor child");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  //   shouldComponentUpdate() {
  //     console.log("getD");
  //     return false;
  //   }

  render() {
    console.log("render child");
    return (
      <div>
        <h3>ComponentChildNumber:{this.props.number}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  //   Hàm sẽ chạy khi setState or thay đổi props
  componentDidUpdate() {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
    //   Life cycle chạy trước khi component biến mất khỏi giao diện
    console.log("componentWillUnmount");
  }
}
