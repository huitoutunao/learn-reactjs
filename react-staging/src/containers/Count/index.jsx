import CountUI from '../../components/Count'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count-action'
import { connect } from 'react-redux'

/*
  1、mapStateToProps 函数的返回值作为状态传递给了 UI 组件
  2、返回值为对象
  3、mapStateToProps 用于传递状态
*/
function mapStateToProps(state) {
  return {
    count: state
  }
}

/*
  1、mapDispatchToProps 函数返回值作为操作方法传递给了 UI 组件
  2、返回值为对象
  3、mapDispatchToProps 用于传递操作状态的方法
*/
/* function mapDispatchToProps(dispatch) {
  return {
    increment: (number) => {
      dispatch(createIncrementAction(number))
    },
    decrement: (number) => {
      dispatch(createDecrementAction(number))
    },
    incrementAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time))
    }
  }
} */

// 简写形式
const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction
}

// 使用 connect()() 创建并暴露一个 Count 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
