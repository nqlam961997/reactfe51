import BaiTapGioHang from "../../Components/BaiTapGioHang";

// Giá trị ban đầu của state
const stateDefaut = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  ],
};

// Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  return { ...state };
};

export default BaiTapGioHangReducer
