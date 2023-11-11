import React, { Component } from 'react'
import { WechatOutlined } from '@ant-design/icons'
import { ConfigProvider, Button, DatePicker } from 'antd'
import zhCN from 'antd/locale/zh_CN'

const { RangePicker } = DatePicker

export default class App extends Component {
  onChange = () => {
    //
  }

  render() {
    return (
      <ConfigProvider locale={zhCN} theme={{
        token: {
          colorPrimary: '#00b96b',
        }
      }}>
        <Button type="primary">按钮</Button>
        <WechatOutlined />
        <DatePicker onChange={this.onChange} />
        <RangePicker />
      </ConfigProvider>
    )
  }
}
