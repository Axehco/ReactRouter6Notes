import React, { useState } from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Messages() {
  const [messages] = useState([
    { id: '001', title: '消息1', content: '锄禾日当午' },
    { id: '002', title: '消息2', content: '汗滴禾下土' },
    { id: '003', title: '消息3', content: '谁知盘中餐' },
    { id: '004', title: '消息4', content: '粒粒皆辛苦' }
  ])
  return (
    <div>
      <ul>
        {messages.map((v) => {
          return (
            <li key={v.id}>
              {/* params传参，携带的时候占位 */}
              <NavLink to={`detail/${v.id}/${v.title}/${v.content}`}>{v.title}</NavLink>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
