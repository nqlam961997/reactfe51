import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = () =>{
        alert('Hello Cybersoft')
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }

    render() {
        return (
            <div>
                {/* Xử lí sự kiện truyền callback */}
                <button onClick = {this.showTitle}>Hello</button>

                {/* Xử lí sụ kiện sử dụng hàm trung gian */}
                <button onClick = {()=>{
                    this.showTitle();
                }}>Show title</button>
                <br></br>

                <button onClick = {this.showMess.bind(this,'Lâm')}>Show message</button>

                <button onClick = {() =>{
                    this.showMess('Lâm')
                }}>Show message</button>
            </div>
        )
    }
}
