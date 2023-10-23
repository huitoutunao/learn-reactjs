import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <h1>欢迎进入页面</h1>
        <div className="card">
          <a href="https://github.com/reactjs" target="_blank" rel="noreferrer">
            <img alt="headImg" src="https://img1.baidu.com/it/u=3548585884,556559510&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" style={{width:'100px'}} />
          </a>
          <p className="card-text">hello</p>
        </div>
      </div>
    )
  }
}
