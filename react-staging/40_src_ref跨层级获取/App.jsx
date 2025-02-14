import React from 'react'

function Son(props) {
  const { grandRef } = props
  return (
    <div>
      <div> i am alien </div>
      <span ref={grandRef}>这个是想要获取元素</span>
    </div>
  )
}

function Father(props) {
  return (
    <div>
      <Son grandRef={props.grandRef} />
    </div>
  )
}
const NewFather = React.forwardRef((props, ref) => <Father grandRef={ref} {...props}></Father>)

class App extends React.Component {
  componentDidMount() {
    console.log(this.node) // span #text 这个是想要获取元素
  }

  render() {
    return (
      <NewFather ref={(node)=> this.node = node}></NewFather>
    )
  }
}

export default App
