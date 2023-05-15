import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './layout/User.jsx'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import AuthProvider from './providers/AuthProvider'
import CurrentUsers from './pages/private/private pages/CurrentUsers'
import NewUsers from './pages/private/private pages/new users/NewUsers'
import UpdateUsers from './pages/private/update users/UpdateUsers'

const router=createBrowserRouter([
  {
    path:'/',
    element:<User></User>,
    children:[
      {
path:'/',
element:<CurrentUsers></CurrentUsers>,
loader:()=>fetch('http://localhost:5000/users')
      },
      {
path:'/newusers',
element:<NewUsers></NewUsers>
      },
      {
path:'/updateuser/:id',
element:<UpdateUsers></UpdateUsers>,
loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
      },
     {
      path:'/login',
      element:<Login></Login>
     },
     {
      path:'/register',
      element:<Register></Register>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl	mx-auto'>
<React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>
</div>,
)
