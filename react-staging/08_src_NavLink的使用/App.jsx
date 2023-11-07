import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import HomeView from './pages/Home'
import AboutView from './pages/About'

/*
  路由组件与一般组件
    1. 写法不同：
      一般组件：<Demo/>
      路由组件：<Route path='/about' component={ Demo }></Route>
    2. 存放位置不同：
      一般组件：components
      路由组件：pages
    3. 接收到的 props 不同：
      一般组件：写组件标签时传递了什么，就能收到什么
      路由组件：接收到三个固定的属性 history、location、match
*/

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>

              {/* 原生 html 中，靠 <a> 标签跳转不同的页面 */}
              {/* <a className='list-group-item' href='./about.html'>About</a>
              <a className='list-group-item active' href='./home.html'>Home</a> */}

              {/* 在 React 中靠路由链接实现切换组件 */}
              <NavLink activeClassName='active' className='list-group-item' to='/about'>About</NavLink>
              <NavLink activeClassName='active' className='list-group-item' to='/home'>Home</NavLink>

            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                <Route path='/about' component={ AboutView }></Route>
                <Route path='/home' component={ HomeView }></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
