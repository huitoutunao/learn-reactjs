import React, { Component, createContext } from 'react'
import './index.css';

// 创建 context 对象
const MyContext = createContext()

export default class A extends Component {
  state = {
    username: 'tom',
  }

  render() {
    const { username } = this.state

    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{username}</h4>
        <MyContext.Provider value={username}>
          <B />
        </MyContext.Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <h4>我从A组件接收的用户名：???</h4>
        <C />
      </div>
    )
  }
}

/* class C extends Component {
  // 声明接收 context
  static contextType = MyContext

  render() {
    return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <h4>我从B组件接收的用户名：{this.context}</h4>
      </div>
    )
  }
} */

function C() {
  return (
    <div className='grand'>
      <h3>我是C组件</h3>
      <h4>
        我从B组件接收的用户名：
        <MyContext.Consumer>
          {
            value => {
              return `${value}`
            }
          }
        </MyContext.Consumer>
      </h4>
    </div>
  )
}
