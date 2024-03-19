import { useState, useContext } from 'react'
import { TasksDispatchContext } from './TasksContext'

let nextId = 3

export default function AddTask() {
  const [text, setText] = useState('')
  const dispatch = useContext(TasksDispatchContext)

  return (
    <>
      <input type='text' placeholder="Add task" value={text} onChange={e => setText(e.target.value)} />
      <button
        onClick={() => {
          setText('');
          dispatch({
            type: 'added',
            id: nextId++,
            text,
          });
        }}
      >
        Add
      </button>
    </>
  )
}
