import React from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'

export default function Home() {
  const result = useOutlet()
  console.log(result)
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            {/* 三种写法：要么就是写全，要么不要在前面加斜杠/，要么就是./ */}
            {/* <NavLink className="list-group-item" to="/home/news">News</NavLink> */}
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            {/* <NavLink className="list-group-item" to="/home/messages">Message</NavLink> */}
            <NavLink className="list-group-item" to="messages">Message</NavLink>
          </li>
        </ul>
        <div>
          {/* 指定路由组件呈现的位置 */}
          <Outlet />
        </div>
      </div>
    </div>
  )
}
