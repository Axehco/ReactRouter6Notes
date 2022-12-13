import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navgate = useNavigate()
  
  const gofunc = () => {
    navgate(-1)
  }
  const backfunc = () => {
    navgate(1)
  }
  return (
    <div>
      <button onClick={gofunc}>⬅前进</button>
      <button onClick={backfunc}>➡后退</button>
    </div>
  )
}
