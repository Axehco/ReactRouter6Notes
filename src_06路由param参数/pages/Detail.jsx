import React from 'react'
import { useParams, useMatch } from 'react-router-dom'

export default function Detail() {
  const {id, title, content} = useParams()
  const res = useMatch('/home/messages/detail/:id/:title/:content')
  console.log(res)
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{content}</li>
      </ul>
    </div>
  )
}
