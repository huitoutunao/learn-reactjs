import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* 此处需要 Provider 包裹 app，目的是让 app 所有的后代容器组件都能接收到 store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// 全局订阅
/* store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}) */
