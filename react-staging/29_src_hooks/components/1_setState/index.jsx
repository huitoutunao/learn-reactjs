import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count: 0,
  }

  /*
    1、对象式的 setState 是函数式的 setState 的简写方法（语法糖）
    2、使用原则：
      （1）如果新状态不依赖于原状态 ===> 使用对象方式
      （2）如果新状态依赖于原状态 ===> 使用函数方式
      （3）如果需要再 setState() 执行后获取最新的状态数据，要在第二个 callback 函数中读取

  */

  add = () => {
    // 对象式的 setState
    /* // 1、获取原来的 count
    const { count } = this.state
    // 2、更新状态
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count) // 正确状态
    })
    // console.log('输出', this.state.count) // 异步输出 0 */

    // 函数式的 setState
    this.setState((state, props) => {
      console.log(state, props)
      return {count: state.count + 1}
    })
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
