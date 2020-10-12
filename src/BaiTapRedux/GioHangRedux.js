import React, { Component } from "react";
import SanPhamGH from "./SanPhamGH";

// import thử viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.UpDownQuantity(spGioHang.maSP, false);
              }}
            >
              -
            </button>
            {spGioHang.soLuong}
            <button
              onClick={() => {
                this.props.UpDownQuantity(spGioHang.maSP, true);
              }}
            >
              +
            </button>
          </td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.xoaGioHang(spGioHang.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
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
            <th>Hình ảnh</th>
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

// Tạo ra 1 props là hàm đưa giá trị lên reducer => để set lại state
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      // Tạo ra action gửi lên reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      // Dùng hàm dispatch đưa lên reducer
      dispatch(action);
    },
    UpDownQuantity: (maSP, UpDown) => {
      const action = {
        type: "UPDOWN_QUANTITY",
        maSP,
        UpDown,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); //Kết nối giữa GioHangReduxComponent và redux store
