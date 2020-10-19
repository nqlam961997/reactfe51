import React, { Component } from 'react'
import FormComponent from './FormComponent'

export default class DanhSachNguoiDung extends Component {
    render() {
        return (
            <div className="container">
                <FormComponent/>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>MÃ SV</th>
                            <th>TÊN</th>
                            <th>SĐT</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
