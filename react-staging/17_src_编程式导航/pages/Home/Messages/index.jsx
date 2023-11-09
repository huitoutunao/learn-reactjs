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

  replaceShow = (id, title) => {
    // replace 跳转 + 携带 params 参数
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`)

    // replace 跳转 + 携带 search 参数
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`)

    // replace 跳转 + 携带 state 参数
    this.props.history.replace('/home/messages/detail', {
      id,
      title,
    })
  }

  pushShow = (id, title) => {
    // push 跳转 + 携带 params 参数
    // this.props.history.push(`/home/messages/detail/${id}/${title}`)

    // push 跳转 + 携带 search 参数
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)

    // push 跳转 + 携带 state 参数
    this.props.history.push('/home/messages/detail', {
      id,
      title,
    })
  }

  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(-1)
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
                  {/* 向路由组件传递 params 参数 */}
                  {/* <Link to={`/home/messages/detail/${item.id}/${item.title}`}>
                    { item.title }
                  </Link> */}

                  {/* 向路由组件传递 search 参数 */}
                  {/* <Link to={`/home/messages/detail?id=${item.id}&title=${item.title}`}>
                    { item.title }
                  </Link> */}

                  {/* 向路由组件传递 state 参数 */}
                  <Link to={{
                    pathname: '/home/messages/detail',
                    state: {
                      id: item.id,
                      title: item.title,
                    }
                  }}>
                    { item.title }
                  </Link>

                  &nbsp;<button onClick={ () => this.pushShow(item.id, item.title) }>
                    push查看
                  </button>
                  &nbsp;<button onClick={ () => this.replaceShow(item.id, item.title) }>
                    replace查看
                  </button>
                </li>
              )
            })
          }
        </ul>
        <hr />
        {/* 声明接收 params 参数，备注：刷新页面可以保存参数 */}
        {/* <Route path='/home/messages/detail/:id/:title' component={ Detail } /> */}

        {/* search 参数无须声明接收，备注：刷新页面可以保存参数 */}
        {/* <Route path='/home/messages/detail' component={ Detail } /> */}

        {/* state 参数无须声明接收，备注：刷新页面可以保存参数 */}
        <Route path='/home/messages/detail' component={ Detail } />

        <button onClick={ this.back }>
          回退
        </button>
        <button onClick={ this.forward }>
          前进
        </button>
        <button onClick={ this.go }>
          Go
        </button>
      </div>
    )
  }
}
