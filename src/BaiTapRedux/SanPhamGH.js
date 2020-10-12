import React, { Component } from "react";

export default class SanPhamGH extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.spGioHang.maSP}</td>
        <td>{this.props.spGioHang.tenSP}</td>
        <td>{this.props.spGioHang.soLuong}</td>
        <td>1000</td>
        <td>1000</td>
        <td>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}
