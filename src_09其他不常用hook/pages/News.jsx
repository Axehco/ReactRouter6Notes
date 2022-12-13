import React from 'react'
import {useResolvedPath} from 'react-router-dom'

export default function News() {
  const r = useResolvedPath('/user?id=0018&name=19#qwe')
  console.log(r)
  return (
    <div>
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    </div>
  )
}
