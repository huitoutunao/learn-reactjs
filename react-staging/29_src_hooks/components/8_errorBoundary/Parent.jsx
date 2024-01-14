import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasError: '', // 用户标识子组件是否产生错误
  }

  // 当 Parent 的子组件出现报错时，会触发，且携带错误信息（仅用于生产环境）
  static getDerivedStateFromError(err) {
    console.log(err)
    return {
      hasError: err,
    }
  }

  componentDidCatch() {
    console.log('渲染组件时出错，一般统计错误，反馈给服务器')
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {
          this.state.hasError ? <h2>当前网络不稳定</h2> : <Child />
        }
      </div>
    )
  }
}
