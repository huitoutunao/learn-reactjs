import React from 'react'
import { NavLink, useRoutes, useNavigate, useInRouterContext } from 'react-router-dom'
import routes from './routes'
// import Home from './pages/Home'
// import About from './pages/About'

export default function App() {
  const element = useRoutes(routes)
  console.log('useInRouterContext', useInRouterContext())
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  const forward = () => {
    navigate(1)
  }

  return (
    <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
              <button onClick={forward}>前进</button>
              <button onClick={back}>后退</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>

              {/* 原生 html 中，靠 <a> 标签跳转不同的页面 */}
              {/* <a className='list-group-item active' href='./home.html'>Home</a>
              <a className='list-group-item' href='./about.html'>About</a> */}

              {/* 路由链接 */}
              <NavLink className="list-group-item" to='./home'>Home</NavLink>
              <NavLink className="list-group-item" to='./about'>About</NavLink>

            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                {element}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
