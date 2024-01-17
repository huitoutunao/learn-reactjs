import React from 'react'
import { useParams, useMatch } from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  // console.log(params)

  const x = useMatch('/home/message/detail/:content')
  console.log(x)

  return (
    <div>{ params.content }</div>
  )
}
