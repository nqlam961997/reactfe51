import React, { useState } from "react";
// const arr = []; các giá trị không phải state, không cần render lại khi setState => để ở ngoài component

export default function BaiTapDoiMauXe() {

  const [stateHinh, setStateHinh] = useState(
    "./img/car/products/black-car.jpg"
  );
  console.log(stateHinh);
  const renderHinhAnh = (color) => {
    const duongDanMoi = `./img/car/products/${color}-car.jpg`;
    setStateHinh(duongDanMoi);;
  };
  return (
    <section className="show-room">
      <h2 className="text-center">
        <font style={{ verticalAlign: "inherit" }}>
          <font style={{ verticalAlign: "inherit" }}>Xe Màu Chọn Bài</font>
        </font>
      </h2>
      <div className="container">
        <div className="chose__color d-flex justify-content-around">
          <button className="btn" onClick={() => renderHinhAnh("black")}>
            <img
              src="./img/car/icons/icon-black.jpg"
              alt="hinh anh"
              style={{ width: 50 }}
            />
          </button>
          <button className="btn" onClick={() => renderHinhAnh("red")}>
            <img
              src="./img/car/icons/icon-red.jpg"
              alt="hinh anh"
              style={{ width: 50 }}
            />
          </button>
          <button className="btn" onClick={() => renderHinhAnh("silver")}>
            <img
              src="./img/car/icons/icon-silver.jpg"
              alt="hinh anh"
              style={{ width: 50 }}
            />
          </button>
          <button className="btn" onClick={() => renderHinhAnh("steel")}>
            <img
              src="./img/car/icons/icon-steel.jpg"
              alt="hinh anh"
              style={{ width: 50 }}
            />
          </button>
        </div>
        <div className="car mt-2">
          <img className="img-thumbnail" src={stateHinh} alt="hinh anh" />
        </div>
      </div>
    </section>
  );
}
