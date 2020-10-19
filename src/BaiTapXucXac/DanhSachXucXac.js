import React, { Component } from "react";
import { connect } from "react-redux";
import XucXac from "./XucXac";

class DanhSachXucXac extends Component {
  render() {
    return (
      <div className="row text-center mt-5">
        <div className="col-5">
          <button className="btnGame" onClick={()=>this.props.datCuoc(true)}>TÀI</button>
        </div>
        <div className="col-2">
          <XucXac/>
        </div>
        <div className="col-5">
          <button className="btnGame" onClick={()=>this.props.datCuoc(false)}>XỈU</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    datCuoc: (taiXiu)=>{
      let action = {
        type: 'DAT_CUOC',
        taiXiu,
      }
      dispatch(action);
    },
  }
}

export default connect(null,mapDispatchToProps)(DanhSachXucXac);
