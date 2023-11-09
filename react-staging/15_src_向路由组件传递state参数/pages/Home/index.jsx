import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import MyNavlink from '../../components/MyNavlink'
import News from './News'
import Messages from './Messages'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home的内容</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <MyNavlink to='/home/news'>News</MyNavlink>
            </li>
            <li>
              <MyNavlink to='/home/messages'>Messages</MyNavlink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={ News }></Route>
            <Route path='/home/messages' component={ Messages }></Route>
            <Redirect to='/home/news'></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
