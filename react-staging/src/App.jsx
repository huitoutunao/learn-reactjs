import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudents = () => {
    axios.get('/students').then(
      (res) => {
        console.log('成功了', res.data)
      },
      (err) => {
        console.log('失败了', err)
      }
    )
  }

  render() {
    return (
      <button onClick={ this.getStudents }>点我获取学生数据</button>
    )
  }
}
