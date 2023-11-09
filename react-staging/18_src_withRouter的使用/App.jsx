import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomeView from './pages/Home'
import AboutView from './pages/About'
import GameView from './pages/Game'
import Header from './components/Header'
import MyNavlink from './components/MyNavlink'

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
            <Header></Header>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>

              {/* 原生 html 中，靠 <a> 标签跳转不同的页面 */}
              {/* <a className='list-group-item' href='./about.html'>About</a>
              <a className='list-group-item active' href='./home.html'>Home</a> */}

              {/* 在 React 中靠路由链接实现切换组件 */}
              {/* <NavLink activeClassName='active' className='list-group-item' to='/about'>About</NavLink>
              <NavLink activeClassName='active' className='list-group-item' to='/home'>Home</NavLink> */}

              <MyNavlink to='/about'>About</MyNavlink>
              <MyNavlink to='/home'>Home</MyNavlink>
              <MyNavlink to='/game'>Game</MyNavlink>

            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                {/* 注册路由 */}
                {/* Switch 正确匹配路径后不再往下执行匹配 */}
                {/* Route 严格匹配属性 exact=true，默认是模糊匹配，输入的路径必须包含要匹配的路径，且顺序要一致 */}
                <Switch>
                  <Route path='/about' component={ AboutView }></Route>
                  <Route path='/home' component={ HomeView }></Route>
                  <Route path='/game' component={ GameView }></Route>
                  <Redirect to='/about'></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
