import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <Link className="list-group-item" to="news">News</Link>
          </li>
          <li>
            <Link className="list-group-item" to="messages">Message</Link>
          </li>
        </ul>
        <div>
          {Outlet}
        </div>
      </div>
    </div>
  )
}
