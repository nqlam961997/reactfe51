import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={sanPham.hinhAnh} alt width={50} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button
            className="btn btn-danger"
            onClick={() => this.props.themGioHang(sanPham)}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    );
  }
}
// Hàm lấy state từ redux biến thành props component
const mapStateToProps = (state) => {
  return {};
};

// Hàm tạo ra 1 hàm xử lí để đưa giá trị lên redux (SetState)
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sanPhamClicked) => {
      // Từ sản phẩm dc click => tạo ra sản phẩm giỏ hàng
      let spGH ={...sanPhamClicked,soLuong: 1};
      // Để gửi giá trị lên reducer cần 1 object có thuộc tính type để phân biệt state nào thay đổi
      let action = {
        type:'THEM_GIO_HANG', //Thuộc tính bắt buộc
        spGH:spGH //Giá trị gửi đến reducer
      };
      // Dùng hàm dispatch mà redux cung cấp đưa action lên reducer
      dispatch(action);
      console.log(sanPhamClicked);
    },
  };
};

// Tham số 1: hàm connect là 1 hàm (callBackFunction): lấy giá trị từ reducer về
// Tham số 2: hàm connect là 1 hàm (callBackFunction): đưa các giá trị lên reducer
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux);
