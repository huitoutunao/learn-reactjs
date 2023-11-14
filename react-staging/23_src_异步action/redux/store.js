import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // 异步 action
import countReducer from './count-reducer'

export default createStore(countReducer, applyMiddleware(thunk))
