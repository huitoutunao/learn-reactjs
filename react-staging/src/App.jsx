import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getStudents = () => {
    axios.get('/api1/students').then(
      (res) => {
        console.log('成功了', res.data)
      },
      (err) => {
        console.log('失败了', err)
      }
    )
  }

  getCars = () => {
    axios.get('/api2/cars').then(
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
      <div>
        <button onClick={ this.getStudents }>
          点我获取学生数据
        </button>
        <button onClick={ this.getCars }>
          点我获取汽车数据
        </button>
      </div>
    )
  }
}
