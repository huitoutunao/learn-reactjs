import React, { Component } from 'react'
// import { useState } from 'react'

// 类式组件
class Demo extends Component {
  state = {
    count: 0,
  }

  add = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}

// 函数式组件
/* function Demo () {
  const [count, setCount] = useState(0)
  const add = () => {
    // setCount(count + 1)
    setCount(count => count + 1)
  }

  return (
    <div>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
    </div>
  )
} */

export default Demo
