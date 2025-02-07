import { useRef } from 'react'
import Form from './components/Form'
import FormItem from './components/FormItem'
import Input from './components/Input'

export default function App() {
  const form = useRef(null)

  const submit =()=>{
    /* 表单提交 */
    form.current.submitForm(formValue => {
      console.log(formValue)
    })
  }

  const reset = () => {
    /* 表单重置 */
    form.current.resetForm()
  }

  return (
    <div className="box">
      <Form ref={ form }>
        <FormItem name="username" label="用户名">
          <Input />
        </FormItem>
        <FormItem name="mes" label="我想对大家说">
          <Input />
        </FormItem>
      </Form>
      <div className="btns">
        <button className="searchbtn"  onClick={ submit } >提交</button>
        <button className="concellbtn" onClick={ reset } >重置</button>
      </div>
    </div>
  )
}
