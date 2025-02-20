import { memo, useContext } from 'react'
import { ThemeContext } from '../App'

function ConsumerDemo() {
  const { color, background } = useContext(ThemeContext)
  return <div style={{ color, background }}>消费者</div>
}
export default memo(() => <ConsumerDemo />)
