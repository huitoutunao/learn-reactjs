import { NavLink, Outlet, useOutlet, useResolvedPath } from 'react-router-dom'

export default function Home() {
  // 嵌套路由组件对象
  console.log('useOutlet', useOutlet())
  // 解析路由
  console.log('useResolvedPath', useResolvedPath('/user?name=1234'))
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className='list-group-item' to='news'>News</NavLink>
          </li>
          <li>
            <NavLink className='list-group-item' to='message'>Message</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}
