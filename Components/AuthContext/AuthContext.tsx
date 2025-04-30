import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  user: null,
  login: (userData: any) => {},
  logout: () => {},
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: any }> = ({ children }) => {
  const [user, setUser] = useState(null);

  // Persist login using localStorage (optional)
  useEffect(() => {
    const storedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null;
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData: any) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
