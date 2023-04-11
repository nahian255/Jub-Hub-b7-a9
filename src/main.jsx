import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import Statistics from './Component/Statistics'
import AppliedJobs from './Component/AppliedJobs'
import Blog from './Component/Blog'
import Dynamic from './Component/Dynamic'
import FeaturedJobs from './Component/FeaturedJobs'
import DJobs from './Component/DJobs'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/job/:jobId',
        element: <DJobs ></DJobs>,
        loader: () => fetch('/new.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs />,
        loader: () => fetch('/new.json')
      },
      {
        path: '/blog',
        element: <Blog />
      },
    ]
  },
  {
    path: '*',
    element: <h1> Not Found Data...</h1>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
