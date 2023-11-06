import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login_Main from './screens/Login/Login_Main.tsx'
import Login_Recovery from './screens/Recovery/Login_Recovery.tsx'
import Homepage from './screens/Homepage/App/App.tsx'
import Signup_Main from './screens/Signup/Signup_Main.jsx'
import Postagens from './screens/Postagens/Postagens.tsx'
import Sobre from "./screens/Sobre/Sobre.tsx";
//import CreatePost from "./component/CreatePost/CreatePost.tsx";
import Droptest from "./component/TEST/DropdownTest/Droptest.tsx";


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
    },
    {
      path: "postagens",
      element: <Postagens />
    },
    {
      path: "sobre",
      element: <Sobre />
    },
    {
      path: "test",
      element: <Droptest />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
