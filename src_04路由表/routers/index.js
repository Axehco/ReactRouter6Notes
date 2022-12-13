import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'

const touterTable = [
  { path: '/about', element: <About /> },
  { path: '/home', element: <Home /> },
  { path: '/', element: <Navigate to='/about' /> }
]

export default touterTable