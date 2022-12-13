import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import touterTable from './routers'
import Header from './components/Header'

export default function App() {
  // 根据路由表生成对应的路由规则
  const element = useRoutes(touterTable)
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <Header></Header>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">About</NavLink>
            {/* 点了子组件匹配后，父组件本身不亮了 加end属性 */}
            <NavLink className="list-group-item" end to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
