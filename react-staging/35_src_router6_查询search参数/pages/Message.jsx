import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id: '001', title: '消息1', content: '哈哈哈1'},
    {id: '002', title: '消息2', content: '哈哈哈2'},
    {id: '003', title: '消息3', content: '哈哈哈3'},
  ])
  return (
    <div>
      <ul>
        {
          messages.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}
