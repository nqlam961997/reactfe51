import React, { Component } from "react";


export default class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button className="btn btn-danger">Thêm vào giỏ</button>
        </div>
      </div>
    );
  }
}

