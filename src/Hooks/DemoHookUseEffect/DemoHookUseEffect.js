import React, { useState, useEffect } from "react";

export default function DemoHookUseEffect() {
  const [number, setNumber] = useState(1);
  const [object, setObject] = useState({ number: 1 });

  //   useEffect(()=>{
  //     //   Hàm này chạy khi lần đầu component render và các lần render lại
  //     console.log('componentDidMount');
  //     console.log('componentDidUpdate');
  //   })

  //   useEffect(()=>{
  //     //   Tham số 2 mảng rỗng => chỉ thay thế cho componentDidMount
  //     console.log('componentDidMount');
  //   },[])

  useEffect(() => {
    //   Tham số 2 mảng là giá trị đó thay đổi thì hàm này sẽ thực thi => Chỉ chạy thay thế cho componentDidUpdate
    // Hàm chạy do biến number thay đổi
    console.log("componentDidUpdate");
  }, [object]); // Có thể && nhiều biến state ở tham số thứ 2
  //   Hoặc có thể dùng JSON.stringfy(object) => biến dữ liệu thành chuỗi;

  useEffect(()=>{
      return()=>{
        //   Hủy thì component sẽ gọi hàm này
        console.log('Thay thế cho componentWillUnmount');
      }
  })

  console.log(number);
  return (
    <div>
      {/* <h1>{number}</h1> */}
      <h1>{object.number}</h1>
      <button
        onClick={() => {
          //   number + 1
          let newObject = { ...object };
          newObject.number += 1;
          setObject(newObject);
        }}
      >
        setNumber
      </button>
    </div>
  );
}
