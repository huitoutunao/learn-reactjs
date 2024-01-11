import { useState, useEffect } from 'react'

export default function Review() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(v => v + 1)
  }

  useEffect(() => {
    console.log('setup')
    return () => {
      console.log('cleanup')
    }
  }, [])

  return (
    <div>
      <h2>测试，当前求和为{ count }</h2>
      <button onClick={add}>点我+1</button>
    </div>
  )
}
