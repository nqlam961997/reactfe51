import React, { Component } from "react";

export default class ProductItem extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    return this.props.xuLyChiTiet(currentProduct);
  };

  handleThemSP = () => {
    const currentProduct = this.props.product;
    return this.props.xuLiThemSP(currentProduct);
  };

  render() {
    return (
      <>
        <div className="card">
          <img
            className="card-img-top"
            src={this.props.product.hinhAnh}
            alt="img"
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.product.tenSP}</h4>
            <button className="btn btn-success" onClick={this.handleDetail}>
              Chi tiết
            </button>
            <button className="btn btn-danger" onClick={this.handleThemSP}>Thêm giỏ hàng</button>
          </div>
        </div>
      </>
    );
  }
}
