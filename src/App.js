import React from 'react';
import logo from './logo.svg';
import './App.css';
import DemoStateless from './Components/DemoStateless';
import DemoStateful from './Components/DemoStateful';
import BaiTapLayout1 from './Components/BaiTapLayoutComponents/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
        {/* <DemoStateless/>
        <DemoStateful/> */}
        {/* <BaiTapLayout1/> */}
        {/* <Databinding/> */}
        <HandleEvent/>
    </div>
  );
}

export default App;
