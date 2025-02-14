import React, { useRef, forwardRef, useState, useImperativeHandle } from 'react'

function Son(props, ref) {
  const inputRef = useRef(null)
  const [inputValue , setInputValue] = useState('')
  useImperativeHandle(ref, () => {
    const handleRefs = {
      onFocus() {
        inputRef.current.focus()
      },
      onChangeValue(value) {
        setInputValue(value)
      },
    }

    return handleRefs
  }, [])

  return (
    <div>
      <input placeholder="请输入内容" ref={inputRef}  value={inputValue} />
    </div>
  )
}

const ForwarSon = forwardRef(Son)

class App extends React.Component {
  cur = null
  handerClick() {
    const { onFocus, onChangeValue } = this.cur
    onFocus() // 让子组件的输入框获取焦点
    onChangeValue('let us learn React!') // 让子组件input
  }
  render() {
    return (
      <div>
        <ForwarSon ref={cur => (this.cur = cur)} />
        <button onClick={this.handerClick.bind(this)}>操控子组件</button>
      </div>
    )
  }
}

export default App
