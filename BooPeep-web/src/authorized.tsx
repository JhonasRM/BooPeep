import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Route, Redirect } from 'react-router-dom';
import './index.css';
import Login_Main from './screens/Login/Login_Main.tsx';
import Login_Recovery from './screens/Recovery/Login_Recovery.tsx';
import Homepage from './screens/Homepage/App/App.tsx';
import Signup_Main from './screens/Signup/Signup_Main.jsx';
import Postagens from './screens/Postagens/Postagens.tsx';
import Sobre from './screens/Sobre/Sobre.tsx';
import Dev from './component/Dev/desenvolvimento.tsx';
// import au from './service/AuthContent.ts'; // O componente ProtectedRoute que definimos anteriormente

const router = createBrowserRouter([
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login_Main} />
          <ProtectedRoute path="/home" component={Homepage} />
          <ProtectedRoute path="/postagens" component={Postagens} />
          <ProtectedRoute path="/sobre" component={Sobre} />
          <Route path="/dev" component={Dev} />
        </Switch>
      </Router>
    </AuthProvider>
  );
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'login',
    element: <Login_Main />,
  },
  {
    path: 'signup',
    element: <Signup_Main />,
  },
  {
    path: 'recovery',
    element: <Login_Recovery />,
  },
  {
    path: 'home',
    element: (
      // <ProtectedRoute path="/home" isAuthenticated={isAuthenticated}>
        <Homepage />
      // </ProtectedRoute>
    ),
  },
  {
    path: 'postagens',
    // element: 
    <ProtectedRoute 
    path="/postagens" 
    isAuthenticated={isAuthenticated}><Postagens /></ProtectedRoute>,
  },
  {
    path: 'sobre',
    element: <Sobre/>
    //  <ProtectedRoute path="/sobre" isAuthenticated={isAuthenticated}><Sobre /></ProtectedRoute>,
  },
  {
    path: 'test',
    element: <Droptest />,
  },
  {
    path: 'Dev',
    element: <Dev />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// // Gerencie o estado de autenticação
// const [isAuthenticated, setIsAuthenticated] = useState(false);

// // Implemente a lógica de autenticação
// // Por exemplo, defina isAuthenticated como true quando o usuário fizer login

// // Você também pode adicionar uma rota de redirecionamento para rota padrão
// // se o usuário não estiver autenticado
// <Route path="/" element={isAuthenticated ? <Redirect to="/home" /> : <App />} />
