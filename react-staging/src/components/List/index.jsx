import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, errText } = this.props

    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎进入页面</h2> :
          isLoading ? <h2>Loading</h2> :
          errText ? <h2>{ errText }</h2> :
          users.map((item) => {
            return (
              <div key={ item.id } className="card">
                <a href={ item.html_url } target="_blank" rel="noreferrer">
                  <img alt="headImg" src={ item.avatar_url } style={{ width:'100px' }} />
                </a>
                <p className="card-text">{ item.login }</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
