import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import HomeView from './components/Home'
import AboutView from './components/About'

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
              <Link className='list-group-item' to='/about'>About</Link>
              <Link className='list-group-item' to='/home'>Home</Link>


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
