import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachKetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          Bạn chọn:
    <span className="text-danger ml-3">{this.props.taiXiu ? "TÀI" : "XỈU"}</span>
        </div>
        <div className="display-4">
          Số bàn thắng:
          <span className="text-success ml-3">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi:
          <span className="text-primary ml-3">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.BaiTapGameXucXacReducer.soBanThang,
    taiXiu:state.BaiTapGameXucXacReducer.taiXiu,
    tongSoBanChoi: state.BaiTapGameXucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(DanhSachKetQuaTroChoi);
