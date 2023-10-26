import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login_Main from './screens/Login/Login_Main.tsx'
import Login_Recovery from './screens/Recovery/Login_Recovery.tsx'
import Homepage from './screens/Homepage/Homepage.tsx'
import Signup_Main from './screens/Signup/Signup_Main.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "login",
      element: <Login_Main />
    },
    {
      path: "signup",
      element: <Signup_Main />
    },
    {
      path: "recovery",
      element: <Login_Recovery />
    },
    {
      path: "home",
      element: <Homepage />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
