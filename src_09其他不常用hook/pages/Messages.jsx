import React, { useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function Messages() {
  const navgate = useNavigate()
  const [messages] = useState([
    { id: '001', title: '消息1', content: '锄禾日当午' },
    { id: '002', title: '消息2', content: '汗滴禾下土' },
    { id: '003', title: '消息3', content: '谁知盘中餐' },
    { id: '004', title: '消息4', content: '粒粒皆辛苦' }
  ])
  const showDetail = (v) => {
    navgate(
      // 注意没有`/`
      'detail', {
      replace: false,
      state: {
        id: v.id,
        title: v.title,
        content: v.content
      }
    }
    )
  }
  return (
    <div>
      <ul>
        {messages.map((v) => {
          return (
            <li key={v.id}>
              <NavLink to="detail" state={{ id: v.id, title: v.title, content: v.content }}>{v.title}</NavLink>
              <button onClick={() => showDetail(v)}>点我回到about组件</button>
            </li>
          )
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}
