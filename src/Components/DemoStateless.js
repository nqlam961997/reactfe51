// state less component is component function (react function component)
// Cú pháp tạo: rfc => enter

import React from "react";

export default function DemoStateless() {
  // Bên trong lệnh return của function component là nội dung giao diện của thẻ này.
  // Lưu ý: Nội dung component phải được bao phủ bởi một thẻ bất kì
  return (
    <>
      <div className="card text-white bg-dark w-25">
        <img className="card-img-top" src="https://picsum.photos/200/200" alt />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </>
  );
}
