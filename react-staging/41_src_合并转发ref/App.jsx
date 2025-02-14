import React, { useEffect, useRef } from 'react'

class Form extends React.Component {
  state = {
    name: '',
    age: '',
  }
  render() {
    return (
      <div>
        <div>姓名：{this.state.name}</div>
        <div>年龄：{this.state.age}</div>
      </div>
    )
  }
}

class Index extends React.Component {
  componentDidMount() {
    const { forwardRef } = this.props
    forwardRef.current = {
      form: this.form,      // 给form组件实例 ，绑定给 ref form属性
      index: this,          // 给index组件实例 ，绑定给 ref index属性
      button: this.button,  // 给button dom 元素，绑定给 ref button属性
    }
  }
  form = null
  button = null
  render() {
    return (
      <div>
        <button ref={(button)=> this.button = button }>点击</button>
        <Form ref={(form) => this.form = form } />
      </div>
    )
  }
}
const ForwardRefIndex = React.forwardRef((props, ref) => {
  return <Index {...props} forwardRef={ref} />
})

function App() {
  const ref = useRef(null)
  useEffect(() => {
    console.log(ref.current)
  }, [])

  return <ForwardRefIndex ref={ref} />
}

export default App
