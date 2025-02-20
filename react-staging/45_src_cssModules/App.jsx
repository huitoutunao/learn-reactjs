import style from './styles/index.module.css'
import other from './styles/other.module.scss'
export default function App() {
  return (
    <>
      <div className={style.text + ' text_bg'}>我是App内容</div>
      <div className={other.btn}>按钮</div>
    </>
  )
}
