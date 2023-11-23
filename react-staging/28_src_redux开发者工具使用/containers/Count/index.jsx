import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count'
import { connect } from 'react-redux'

class Count extends Component {

  // 加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value*1)
  }

  // 减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value*1)
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value*1)
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value*1, 500)
  }

  render() {
    return (
      <div>
        <h2>我是Count组件，下方总人数为{this.props.persons.length}</h2>
        <h4>当前求和为：{ this.props.count }</h4>
        <select ref={ c => this.selectNumber = c }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    )
  }
}

/*
  1、mapStateToProps 函数的返回值作为状态传递给了 UI 组件
  2、返回值为对象
  3、mapStateToProps 用于传递状态
*/
function mapStateToProps(state) {
  return {
    count: state.count,
    persons: state.persons,
  }
}

/*
  1、mapDispatchToProps 函数返回值作为操作方法传递给了 UI 组件
  2、返回值为对象
  3、mapDispatchToProps 用于传递操作状态的方法
*/
/* function mapDispatchToProps(dispatch) {
  return {
    increment: (number) => {
      dispatch(createIncrementAction(number))
    },
    decrement: (number) => {
      dispatch(createDecrementAction(number))
    },
    incrementAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time))
    }
  }
} */

// 简写形式
const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction
}

// 使用 connect()() 创建并暴露一个 Count 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Count)
