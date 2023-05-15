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
import PrivateRoute from './pages/private/private routes/PrivateRoute'

const router=createBrowserRouter([
  {
    path:'/',
    element:<User></User>,
    children:[
      {
path:'/currentusers',
element:<CurrentUsers></CurrentUsers>,
loader:()=>fetch('http://localhost:5000/users',{
  method:'GET',
  headers:{
    authorization:`bearer ${localStorage.getItem('user-token')}`
  }
})
      },
      {
path:'/',
element:<PrivateRoute><NewUsers></NewUsers></PrivateRoute>
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
