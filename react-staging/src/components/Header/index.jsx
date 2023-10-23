import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
            {/*使用ref拿到输入的数据，ref中使用回调函数的形式，在实例对象中创建一个KeyValue的属性，值是该节点*/}
            <input type="text" placeholder="输入关键词进行搜索" />&nbsp;
            <button>搜索</button>
        </div>
      </section>
    )
  }
}
