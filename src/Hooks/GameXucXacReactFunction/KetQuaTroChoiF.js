import React from "react";
import {useSelector} from 'react-redux';

export default function KetQuaTroChoiF(props) {

  

  return (
    <div>
      <div className="display-4">
        Bạn chọn:
        <span className="text-danger ml-3">
         TÀI
        </span>
      </div>
      <div className="display-4">
        Số bàn thắng:
        <span className="text-success ml-3">0</span>
      </div>
      <div className="display-4">
        Tổng số bàn chơi:
        <span className="text-primary ml-3">0</span>
      </div>
    </div>
  );
}
