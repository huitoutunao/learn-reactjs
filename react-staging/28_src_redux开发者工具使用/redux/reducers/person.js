import { ADD_PERSON } from '../constant'

// 初始化人的列表
const initState = [{id: '001', name: 'tom', age: 18}]

export default function personReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data) // 此处不可以这样写，导致 personReducer 不是纯函数
      return [data, ...preState]
    default:
      return preState
  }
}
