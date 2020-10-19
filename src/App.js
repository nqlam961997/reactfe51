import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './Components/DemoStateless';
import DemoStateful from './Components/DemoStateful';
import BaiTapLayout1 from './Components/BaiTapLayoutComponents/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoConditionalAndState from './DemoLogin/DemoConditionalAndState';
import DemoListAndKeys from './ListAndKeys/DemoListAndKeys';
import DemoProps from './Props/DemoProps';
import BaiTapGioHang from './Components/BaiTapGioHang';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux';
import BaiTapGameXucXac from './BaiTapXucXac';
import LifeCycle from './LifeCycle/LifeCycle';
import FormComponent from './FormComponent/FormComponent';
import DanhSachNguoiDung from './FormComponent/DanhSachNguoiDung';


function App() {
  return (
    <div className="App">
        {/* <DemoStateless/>
        <DemoStateful/> */}
        {/* <BaiTapLayout1/> */}
        {/* <Databinding/> */}
        {/* <HandleEvent/> */}
        {/* <DemoConditionalAndState/> */}
        {/* <ChonMauXe/> */}
        {/* <DemoListAndKeys/> */}
        {/* <DemoProps/> */}
        {/* <BaiTapGioHang/> */}
        {/* <BaiTapGioHangRedux/> */}
        {/* <BaiTapGameXucXac/> */}
        {/* <LifeCycle/> */}
        <DanhSachNguoiDung/>
    </div>
  );
}

export default App;
