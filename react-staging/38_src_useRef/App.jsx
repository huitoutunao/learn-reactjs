import { useRef } from 'react'

export default function App() {
  const myRef = useRef(null)

  function handleDom() {
    console.log(myRef.current)
  }

  return (
    <>
      <div ref={myRef}>App</div>
      <button onClick={handleDom}>DOM</button>
    </>
  )
}
