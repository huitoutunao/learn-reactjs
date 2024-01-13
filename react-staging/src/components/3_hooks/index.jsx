// import React, { Component, createRef } from 'react'
// import ReactDOM from 'react-dom'
import root from '../../index'
import { useState, useEffect, useRef } from 'react'

// 类式组件
/* class Demo extends Component {
  state = {
    count: 0,
  }

  myRef = createRef()

  show = () => {
    console.log(this.myRef.current.value)
  }

  add = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({count: state.count + 1}))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef} />
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.show}>展示输入信息</button>
      </div>
    )
  }
} */

// 函数式组件
function Demo () {
  const [count, setCount] = useState(0)
  const myRef = useRef()

  const show = () => {
    console.log(myRef.current.value)
  }

  const add = () => {
    // setCount(count + 1)
    setCount(count => count + 1)
  }

  // 卸载组件
  const unmount = () => {
    root.unmount()
  }

  useEffect(() => {
    console.log('组件挂载完成调用，且可以传入第二个参数监听某个状态变化调用，[] 代表不监听任何状态，数组里面可以列出需要监听的状态')

    return () => {
      console.log('组件将要卸载前调用')
    }
  }, [])

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>展示输入信息</button>
    </div>
  )
}

export default Demo
