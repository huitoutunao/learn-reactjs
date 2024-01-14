import React, { Component, PureComponent } from 'react'
import './index.css'

// PureComponent 优化组件更新状态，导致频繁渲染
export default class Parent extends PureComponent {
  state = {
    carName: '奔驰',
  }

  changeCar = () => {
    this.setState({carName: '宝马'})
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return true
  } */

  render() {
    const { carName } = this.state

    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{carName}</span><br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName='奥迪' />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carName}</span>
      </div>
    )
  }
}
