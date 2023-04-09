import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Statistics from './Component/Statistics'
import AppliedJobs from './Component/AppliedJobs'
import Blog from './Component/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => {
          return fetch('jobs.json')
        }
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />
      },
      {
        path: '/blog',
        element: <Blog />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
