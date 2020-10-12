import React, { Component } from 'react'
import GioHangRedux from './GioHangRedux'
import danhSachSanPham from '../Components/BaiTapGioHang/data.json'
import SanPhamRedux from './SanPhamRedux'

export default class BaiTapGioHangRedux extends Component {

    renderSanPham = () =>{
        return danhSachSanPham.map((sanPham,index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham}/>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">BÀI TẬP GIỎ HÀNG REDUX</h3>
                <div className="">
                    <div className="text-right">Giỏ Hàng(0)</div>
                </div>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="GioHang">
                    <GioHangRedux/>
                </div>

            </div>
        )
    }
}
