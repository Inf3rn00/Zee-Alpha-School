// hooks/useAuthState.ts
import { useState, useEffect } from 'react';

export const useAuthState = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const checkAuth = () => {
    const adminData = localStorage.getItem('admin');
    if (adminData) {
      try {
        const admin = JSON.parse(adminData);
        setIsAuthenticated(true);
        setUserEmail(admin.email || '');
      } catch (error) {
        localStorage.removeItem('admin');
        setIsAuthenticated(false);
        setUserEmail('');
      }
    } else {
      setIsAuthenticated(false);
      setUserEmail('');
    }
  };

  useEffect(() => {
    checkAuth(); // Initial check
    
    // Listen for storage changes
    const handleStorageChange = () => {
      checkAuth();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const logout = () => {
    localStorage.removeItem('admin');
    setIsAuthenticated(false);
    setUserEmail('');
  };

  return { isAuthenticated, userEmail, logout };
};