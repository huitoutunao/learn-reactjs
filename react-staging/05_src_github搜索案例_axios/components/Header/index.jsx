import React, { Component } from 'react'
import axios from 'axios'

export default class Header extends Component {
  search = () => {
    // 获取用户的输入（连续解构赋值+重命名）
    const { keyWordElem: { value: keyWord } } = this
    this.props.updateAppState({ isFirst: false, isLoading: true })
    axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      .then((result) => {
        this.props.updateAppState({ isLoading: false, users: result.data.items })
      }).catch((err) => {
        this.props.updateAppState({ isLoading: false, users: [], errText: `请求出错 ${err.message}` })
      })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
            {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
            <input ref={ c => this.keyWordElem = c } type="text" placeholder="输入关键词进行搜索" />&nbsp;
            <button onClick={ this.search }>搜索</button>
        </div>
      </section>
    )
  }
}
