import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }

  handleClearAll = () => {
    this.props.clearAllTodo()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, cur) => {
      return cur.done ? pre + 1 : pre
    }, 0)
    const total = todos.length
    return (
      <div className="todo-footer">
        <label>
        <input type="checkbox" checked={ doneCount === total && total !== 0 ? true : false } onChange={ this.handleCheckAll } />
        </label>
        <span>
        <span>已完成{ doneCount }</span> / 全部{ total }
        </span>
        <button className="btn btn-danger" onClick={ this.handleClearAll }>清除已完成任务</button>
      </div>
    )
  }
}
