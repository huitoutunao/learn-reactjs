import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos, updateTodo, delTodo } = this.props
    return (
      <ul className="todo-main">
        {
          todos.map((item) => {
            return <Item key={ item.id } { ...item } updateTodo={ updateTodo } delTodo={ delTodo } />
          })
        }
      </ul>
    )
  }
}
