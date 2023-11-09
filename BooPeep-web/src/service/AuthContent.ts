// AuthContext.js
import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  var err = null
  const login = (email: String, password: String) => {
      const response = await axios
        .get("http://localhost:3000/db/user", {
          params: {
            email,
            password,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setIsAuthenticated(true);
            setUser(userData);
          }else if (response.status === 404) {
            throw err = 2
          } else if (response.status != 200 && response.status != 404 ){
            throw err = 1
          }
  };

  const logout = () => {
    // Realize a lógica de logout aqui
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
