import React from 'react'
import ReactDOM from 'react-dom/client'
import Login_Main from './Login/Entrar/Login_Main.tsx'
import './index.css'
import Cadastro_Main from './Login/Cadastro/Cadastro_Main.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Cadastro_Main />
  </React.StrictMode>,
)
