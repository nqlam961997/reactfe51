import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {

    state = {
        isLogin: false,
    };

    // isLogin = false; //これは間違い方法だ。レンだがされていないだから。
    userName = 'ラム';

    // class function

    renderLogin = () =>{
        if(this.state.isLogin){
            // ウザイを表示する。  
            return <p>{this.userName}</p>
        }else{
            // ブトンを表示する。
            return <button onClick={this.handlelogin}>Login</button>
        }
    }

    handlelogin = () =>{
        // this.isLogin = true;
        console.log('run');
        // this.state.isLogin = true; //これは間違い方法だ。レンだがされていないだから。
        this.setState({
            isLogin: true,
        });
    }


    render() {
        console.log('run render');
        return (
            <div>
                <h2>ConditionalAndState</h2> 
                {this.renderLogin()}   
            </div>
        )
    }
}
