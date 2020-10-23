import React, { Component } from "react";
import FormComponent from "./FormComponent";
import { connect } from "react-redux";
import { suaNguoiDungAction, xoaNguoiDungAction } from "../redux/action/QuanLyNguoiDungAction";
import NewFormComponent from "./NewFormComponent";

class DanhSachNguoiDung extends Component {
  renderDanhSachNguoiDung = () => {
    return this.props.mangNguoiDung.map((nguoiDung, index) => {
      return (
        <tr key={index}>
          <td>{nguoiDung.maNguoiDung}</td>
          <td>{nguoiDung.tenNguoiDung}</td>
          <td>{nguoiDung.soDienThoai}</td>
          <td>{nguoiDung.email}</td>
          <td>
            <button className="btn btn-primary" onClick={()=>{
                // Tạo ra action từ người dùng được click
                let action = suaNguoiDungAction(nguoiDung)
                // Dispatch action nguoiDungChinhSua lên reducer
                this.props.dispatch(action);
            }}>Sửa</button>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                //Gọi hàm trong mapDispatchToProps
                // Hàm này khi sử dụng connect với redux sẽ tự có props này
                // let action = {
                //   type: "XOA_NGUOI_DUNG",
                //   maNguoiDung: nguoiDung.maNguoiDung,
                // };

                this.props.dispatch(xoaNguoiDungAction(nguoiDung.maNguoiDung));
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
    return (
      <div className="container">
        {/* <FormComponent /> */}
        <NewFormComponent/>
        <table className="table text-center">
          <thead>
            <tr>
              <th>MÃ SV</th>
              <th>TÊN</th>
              <th>SĐT</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>{this.renderDanhSachNguoiDung()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangNguoiDung: state.QuanLyNguoiDungReducer.mangNguoiDung,
  };
};

export default connect(mapStateToProps)(DanhSachNguoiDung);
