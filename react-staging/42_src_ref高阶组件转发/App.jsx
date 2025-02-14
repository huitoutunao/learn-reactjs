import React, { useEffect, useRef } from 'react'

function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props
      return <Component ref={forwardedRef}  {...otherprops} />
    }
  }
  return React.forwardRef((props, ref)=> <Wrap forwardedRef={ref} {...props} />)
}

class Index extends React.Component {
  render(){
    return <div>hello,world</div>
  }
}
const HocIndex =  HOC(Index)

function App() {
  const ref = useRef(null)
  useEffect(() => {
    console.log(ref.current)
  }, [])

  return <HocIndex ref={ref} />
}

export default App
