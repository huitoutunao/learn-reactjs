import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    errText: '',
  }

  updateAppState = (states) => {
    this.setState(states)
  }

  render() {
    return (
      <div className='container'>
        <Header updateAppState={ this.updateAppState }></Header>
        <List { ...this.state }></List>
      </div>
    )
  }
}
