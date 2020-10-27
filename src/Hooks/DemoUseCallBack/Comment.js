import React, { memo } from "react";

function Comment(props) {
  console.log("comment");
  return (
    <div>
      <textarea></textarea>
      <br />
      <button>Gửi</button>
    </div>
  );
}

export default memo(Comment);
// Xài thư viện memo thì sẽ không render lại
// Những tham số nào truyền vô component thay đổi thì memo sẽ nhận biết dc để render lại
