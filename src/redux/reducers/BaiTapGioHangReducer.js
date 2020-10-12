import BaiTapGioHang from "../../Components/BaiTapGioHang";

// Giá trị ban đầu của state
const stateDefaut = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "VinSmart Live",
    //   manHinh: 'AMOLED, 6.2", Full HD+',
    //   heDieuHanh: "Android 9.0 (Pie)",
    //   cameraTruoc: "20 MP",
    //   cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    //   ram: "4 GB",
    //   rom: "64 GB",
    //   giaBan: 5700000,
    //   hinhAnh: "./img/vsphone.jpg",
    // },
  ],
};

// Hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefaut, action) => {
  switch (action.type) {
    // Xử lí cập nhật lại state
    case "THEM_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      // Tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }
      // Gán lại state cũ = giá trị mới
      // giống vs setState
      state.gioHang = gioHangUpdate;
      // return lại state mới vì tính chất bất biến của redux. Việc này sẽ cung cấp vùng nhớ mới.
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      // let gioHangUpdate = [...state.gioHang];
      // const index = gioHangUpdate.findIndex(
      //   (spGH) => spGH.maSP === action.maSPCLicked
      // );
      // if (index !== -1) {
      //   gioHangUpdate.splice(index, 1);
      // }
      let gioHangUpdate = state.gioHang.filter((spGH) => {
        return spGH.maSP !== action.maSPClick;
      });
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "UPDOWN_QUANTITY": {
      let gioHangUpdate = [...state.gioHang];
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.maSP
      );
      if (index !== -1) {
        if (action.UpDown) {
          gioHangUpdate[index].soLuong += 1;
        } else {
          if (gioHangUpdate[index].soLuong > 1) {
            gioHangUpdate[index].soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
  }
  return { ...state };
};

export default BaiTapGioHangReducer;
