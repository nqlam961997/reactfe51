import React, { Component } from "react";
import SanPhamGH from "./SanPhamGH";

// import thử viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return <SanPhamGH spGioHang={spGioHang} />;
    });
  };

  render() {
    console.log("props", this.props);
    return (
      <table class="table text-center">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}

// Lấy state từ redux store biến thành props của component
// Tham số state: Đại diện cho rootReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux); //Kết nối giữa GioHangReduxComponent và redux store
