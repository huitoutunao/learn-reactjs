import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const newCount = `${count}次`

  useEffect(() => {
    // 页面挂载完执行
    return () => {
      // 清理函数
    }
  }, [])

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>{count}</div>
      <p>{newCount}</p>
      <button onClick={handleCount}>click</button>
    </>
  )
}
