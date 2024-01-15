import { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  const add = () => {
    setSum(sum + 1)
  }

  return (
    <div>
      <h3>我是Home内容</h3>
      {
        sum === 4 ? <Navigate to="/about" /> : <h4>当前sum值：{ sum }</h4>
      }
      <button onClick={ add }>点我改变sum</button>
    </div>
  )
}
