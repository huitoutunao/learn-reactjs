import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavlink extends Component {
  render() {
    // const { title } = this.props
    // console.log(this.props)
    // 标签体内容是一个特殊的标签属性 children
    return (
      <NavLink activeClassName='active' className='list-group-item' {...this.props}></NavLink>
    )
  }
}
