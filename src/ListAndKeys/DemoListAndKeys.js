import React, { Component } from "react";

export default class DemoListAndKeys extends Component {
  danhSachKhoaHoc = ["NodeJS", "ReactJS", "VueJS"];

  renderDanhSachKhoaHoc = () => {
    return this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };

  //   Nâng cao
  //   renderDanhSachKhoaHoc = () =>
  //     this.danhSachKhoaHoc.map((khoaHoc, index) => <li>{khoaHoc}</li>);

  render() {
    return (
      <div>
        <h2>DemoListAndKeys</h2>
        <h3>Danh Sách Khóa Học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}
