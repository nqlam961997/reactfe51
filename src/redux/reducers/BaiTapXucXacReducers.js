const stateDefault = {
    taiXiu: true, //True is Tài (từ 3 -> 11), false is Xỉu
    mangXucXac: [
        { ma: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
        { ma: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
        { ma: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_CUOC":{
            state.taiXiu = action.taiXiu;
            return {...state}
        };
        case "PLAY_GAME":{
            let mangXucXacNgauNhien = [];
            for(let i = 0; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = {ma:soNgauNhien,hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`}
                mangXucXacNgauNhien.push(xucXacNgauNhien);  
            }
            state.mangXucXac = mangXucXacNgauNhien;
            state.tongSoBanChoi += 1;
            // Xử lí số bàn thắng
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem,xucXac,index)=>{
                return tongDiem += xucXac.ma;
            },0)

            if(tongSoDiem > 11 && state.taiXiu === true || tongSoDiem < 11 && state.taiXiu === false){
                state.soBanThang += 1;
            }
            return {...state};
        }
        default:
            return { ...state };
    }
};

export default BaiTapGameXucXacReducer;
