import { useState } from 'react'
import { Link, Outlet, useNavigate, useNavigationType } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id: '001', title: '消息1', content: '哈哈哈1'},
    {id: '002', title: '消息2', content: '哈哈哈2'},
    {id: '003', title: '消息3', content: '哈哈哈3'},
  ])

  // 判断跳转方式
  console.log('useNavigationType', useNavigationType())

  const navigate = useNavigate()
  const showDetail = (options) => {
    navigate('detail', {
      relative: false,
      state: {
        content: options.content,
      },
    })
  }

  return (
    <div>
      <ul>
        {
          messages.map((item) => {
            return (
              <li key={item.id}>
                <Link to="detail" state={{ id: item.id, content: item.content }}>{item.title}</Link>
                <button onClick={() => showDetail(item)}>点我跳转</button>
              </li>
            )
          })
        }
      </ul>
      <Outlet />
    </div>
  )
}
