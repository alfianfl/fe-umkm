import { createContext, useContext } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const login = (value) => {
    Cookies.set('accessToken', value);
  };

  const userId = (value) => {
    Cookies.set('userId', value);
  };

  const logout = () => {
    Cookies.remove('accessToken');
  };

  return (
    <AuthContext.Provider value={{ login, logout, userId }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
