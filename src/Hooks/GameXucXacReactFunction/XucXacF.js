import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

export default function XucXacF(props) {
  // console.log(props.mangXucXac);

  // const mangXucXac = useSelector(state => state.BaiTapGameXucXacReducer.mangXucXac);
  const { mangXucXac, taiXiu } = useSelector(
    (state) => state.BaiTapGameXucXacReducer
  );
  // Có thể lấy nhiều phần tử qua bốc tách phần tử
  const dispatch = useDispatch();

  const renderMangXucXac = () => {
    return mangXucXac.map((xucXac, index) => {
      return (
        <img
          className="ml-2"
          style={{ width: 50, height: 50 }}
          src={xucXac.hinhAnh}
          key={index}
        ></img>
      );
    });
  };

  const datCuoc = (taiXiu) =>{
    let action = {
      type: "DAT_CUOC",
      taiXiu: taiXiu,
    };
    dispatch(action);
  }

  return (
    <div className="row text-center mt-5">
      <div className="col-5">
        <button
          className="btnGame"
          onClick={() => {
            datCuoc(true);
          }}
        >
          TÀI
        </button>
      </div>
      <div className="col-2">{renderMangXucXac()};</div>
      <div className="col-5">
        <button
          className="btnGame"
          onClick={() => {
           datCuoc(false);
          }}
        >
          XỈU
        </button>
      </div>
    </div>
  );
}

// const mapStateToProps = state =>{
//   return{
//     mangXucXac: state.BaiTapGameXucXacReducer.mangXucXac
//   }
// }

// export default connect(mapStateToProps)(XucXacF);
