import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension' // redux 开发者工具
import thunk from 'redux-thunk' // 异步 action
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 汇总所有的 reducer
const allReducer = combineReducers({
  count: countReducer,
  persons: personReducer,
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
