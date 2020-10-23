import {
  SUA_NGUOI_DUNG,
  XOA_NGUOI_DUNG,
} from "../constans/QuanLyNguoiDungConst";

const stateDefault = {
  mangNguoiDung: [
    {
      maNguoiDung: 1,
      tenNguoiDung: "Nguyễn Quang Lâm",
      soDienThoai: "09090909",
      email: "nqlam@gmail.com",
    },
    {
      maNguoiDung: 2,
      tenNguoiDung: "Trần Văn Tèo",
      soDienThoai: "09090909",
      email: "tranvanteo@gmail.com",
    },
  ],
  nguoiDungChinhSua: {
    maNguoiDung: "",
    tenNguoiDung: "",
    soDienThoai: "",
    email: "",
  },
  stateForm: {
    values: { maNguoiDung: "", tenNguoiDung: "", soDienThoai: "", email: "" },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    maNguoiDungXoa: "",
  },
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case XOA_NGUOI_DUNG: {
      let mangNguoiDungUpdate = state.mangNguoiDung.filter(
        (nguoiDung) => nguoiDung.maNguoiDung != action.maNguoiDung
      );
      state.mangNguoiDung = mangNguoiDungUpdate;
      return { ...state };
    }
    case SUA_NGUOI_DUNG: {
      // Lấy người dùng được click
      let nguoiDungDuocClick = { ...action.nguoiDungChinhSua };
      state.nguoiDungChinhSua = nguoiDungDuocClick;

      //   Xử lí theo cách 2 NewFormComponent
      state.stateForm = { ...state.stateForm, values: nguoiDungDuocClick };
      return { ...state };
    }

    case "HANDLE_CHANGE_INPUT": {
      state.stateForm = { ...action.newState };
      return { ...state };
    }

    case "CAP_NHAT_THONG_TIN": {
      // Cập nhật lại thông tin người dùng trong mảng
      let mangNguoiDungCapNhat = [...state.mangNguoiDung];
      // Tìm ra người dùng có mã cần cập nhật thông tin
      let index = mangNguoiDungCapNhat.findIndex(
        (nd) => nd.maNguoiDung === action.nguoiDungCapNhat.maNguoiDung
      );
      // Cập nhật thông tin của vị trí người dùng đó = người dùng mới
      mangNguoiDungCapNhat[index] = action.nguoiDungCapNhat;

      state.mangNguoiDung = mangNguoiDungCapNhat;
      console.log(state.mangNguoiDung);
      return { ...state };
    }

    case "THEM_NGUOI_DUNG": {
      const mangNguoiDungCapNhat = [...state.mangNguoiDung, action.nguoiDung];

      state.mangNguoiDung = mangNguoiDungCapNhat;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
