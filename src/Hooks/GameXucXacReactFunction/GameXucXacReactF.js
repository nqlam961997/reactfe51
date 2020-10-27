import React from "react";
import KetQuaTroChoiF from "./KetQuaTroChoiF";
import XucXacF from "./XucXacF";
import {useDispatch} from 'react-redux';

export default function GameXucXacReactF(props) {

    const dispatch = useDispatch()

  return (
    <div>
      <div className="Game">
        <h1 className="display-4 text-center text-capitalize">Bài tập game xúc xắc F</h1>
        <XucXacF />
        <div className="thongTinTroChoi text-center">
          <KetQuaTroChoiF />
          <button className="btn-success text-center p-2 rounded mt-5 display-4" onClick={()=>{
              let action={
                  type:"PLAY_GAME",
              }
              dispatch(action);
          }}>
            Xốc dĩa!
          </button>
        </div>
      </div>
    </div>
  );
}
