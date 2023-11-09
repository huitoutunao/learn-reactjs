import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Detail from './Detail'

export default class Messages extends Component {
  state = {
    messageArr: [
      {
        id: '01',
        title: '消息1',
      },
      {
        id: '02',
        title: '消息2',
      },
      {
        id: '03',
        title: '消息3',
      }
    ],
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((item) => {
              return (
                <li key={ item.id }>
                  {/* 向路由组件船体 params 参数 */}
                  <Link to={`/home/messages/detail/${item.id}/${item.title}`}>
                    { item.title }
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收 params 参数 */}
        <Route path='/home/messages/detail/:id/:title' component={ Detail } />
      </div>
    )
  }
}
