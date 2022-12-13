import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  const { state: {id, title, content } } = useLocation()
  return (
    <div>
      <ul>
        <li>{title}</li>
        <li>{id}</li>
        <li>{content}</li>
      </ul>
    </div>
  )
}
