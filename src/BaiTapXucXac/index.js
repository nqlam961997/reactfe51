// 1. Xây dựng giao diện.
// 2. Xác định nguồn dữ liệu thay đổi
// +mangXucXac:[{so:1,hinhAnh},{so:1,hinhAnh},{so:1,hinhAnh}]
// +banChon: 'Tai'
// +banThang: 0
// +soBanChoi: 0

import React, { Component } from "react";
import DanhSachKetQuaTroChoi from "./DanhSachKetQuaTroChoi";
import DanhSachXucXac from "./DanhSachXucXac";
import "./BaiTapGameXucXac.css";
import { connect } from "react-redux";
// import style from "./BaiTapGameXucXac.module.css";

class BaiTapGameXucXac extends Component {
  render() {
    return (
      // <div className={`${style.fontGame}`} style={{backgroundImage:'url(./img/BaiTapGameXucXac/bgGame.png)',width:'100%',height:'100%',position:'fixed',top:0,left:0}}>
      <div className="Game">
        <h1 className="display-4 text-center">Bài tập game xúc xắc</h1>
        <DanhSachXucXac />
        <div className="thongTinTroChoi text-center">
          <DanhSachKetQuaTroChoi />
          <button
            className="btn-success text-center p-2 rounded mt-5"
            onClick={()=>this.props.playGame()}
          >
            Play Game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  playGame: () => {
    let action = {
      type: "PLAY_GAME",
    };
    dispatch(action);
  },
}
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucXac);
