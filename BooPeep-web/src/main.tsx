import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login_Main from './component/Login/Login_Main.tsx'
import Cadastro_Main from './component/Cadastro/Cadastro_Main.tsx'

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
      path: "cadastro",
      element: <Cadastro_Main />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
