import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
  const [ search, setSearch ] = useSearchParams()

  const x = useLocation()
  console.log(x)

  return (
    <div>
      <h3>{ search.get('content') }</h3>
      <button onClick={() => setSearch('id=006&title=hello&content=你好')}>点我更新收到的search参数</button>
    </div>
  )
}
