import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    /* users: [
      {id: '01', name: 'tom', age: 18},
      {id: '02', name: 'jack', age: 19},
      {id: '03', name: 'mike', age: 20},
    ], */
    users: 'abc',
  }
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
          this.state.users.map((item) => {
            return <h4 key={item.id}>{item.name} --- {item.age}</h4>
          })
        }
      </div>
    )
  }
}
