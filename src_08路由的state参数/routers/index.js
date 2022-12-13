import { Navigate } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Messages from '../pages/Messages'
import Detail from '../pages/Detail'

const touterTable = [
  { path: '/about', element: <About /> },
  {
    path: '/home', element: <Home />, children: [
      { path: 'news', element: <News /> },
      {
        path: 'messages', element: <Messages />, children: [
          { path: 'detail', element: <Detail /> },
        ]
      }
    ]
  },
  { path: '/', element: <Navigate to='/about' /> }
]

export default touterTable