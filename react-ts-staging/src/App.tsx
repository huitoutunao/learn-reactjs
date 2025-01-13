import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './components/Container.tsx'
import Cell from './components/Cell.tsx'
import './App.css'

interface IDataStruct {
  name: string;
  age: number;
}
interface IData {
  name: string;
  age: number;
}

function App() {
  const [count, setCount] = useState(0)
  const [data] = useState<Partial<IData>>({})

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>{ data.name }</div>
      <Container visible controller={() => {}}></Container>
      <Cell<IDataStruct> field="name"></Cell>
      <Cell<IDataStruct> field="age"></Cell>
    </>
  )
}

export default App
