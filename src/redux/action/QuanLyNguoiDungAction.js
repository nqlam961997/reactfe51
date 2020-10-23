import {XOA_NGUOI_DUNG ,SUA_NGUOI_DUNG} from '../constans/QuanLyNguoiDungConst'

// Định nghĩa action để các component trong ứng dụng muốn gọi nghiệp vụ này thì import vào gọi
export const xoaNguoiDungAction = (maNguoiDung) =>{

    // ...

    return{
        type:XOA_NGUOI_DUNG,
        maNguoiDung
    }
}

export const suaNguoiDungAction = (nguoiDung)=>{
    return{
        type:SUA_NGUOI_DUNG,
        nguoiDungChinhSua:nguoiDung
    }
}