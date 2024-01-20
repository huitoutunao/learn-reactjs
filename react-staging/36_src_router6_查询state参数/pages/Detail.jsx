import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const s = useLocation()

  console.log(s)

  return (
    <div>
      <h3>{ s.state.content }</h3>
    </div>
  )
}
