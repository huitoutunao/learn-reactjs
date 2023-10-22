import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  // 状态在哪里，操作方法就在哪里

  // 初始化状态
  state = {
    todos: [
      {
        id: '001',
        name: '睡觉',
        done: true,
      },
      {
        id: '002',
        name: '吃饭',
        done: true,
      },
      {
        id: '003',
        name: '敲代码',
        done: false,
      },
      {
        id: '004',
        name: '打篮球',
        done: true,
      },
    ]
  }

  // 添加，接收一个 todo 对象
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({
      todos: newTodos,
    })
  }

  updateTodo = (id, done) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {...item, done}
      }

      return item
    })

    this.setState({
      todos: newTodos
    })
  }

  delTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => item.id !== id)
    this.setState({
      todos: newTodos
    })
  }

  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((item) => ({...item, done}))
    this.setState({
      todos: newTodos,
    })
  }

  clearAllTodo = () => {
    const { todos } = this.state
    const newTodos = todos.filter((item) => !item.done)
    this.setState({
      todos: newTodos,
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={ this.addTodo } />
          <List todos={ todos } updateTodo={ this.updateTodo } delTodo={ this.delTodo } />
          <Footer todos={ todos } checkAllTodo={ this.checkAllTodo } clearAllTodo={ this.clearAllTodo } />
        </div>
      </div>
    )
  }
}
