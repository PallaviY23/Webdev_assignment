import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import './index.css'
import Layout from './Components/Layout.jsx'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
