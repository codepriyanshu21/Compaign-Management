// Example: useAuth.js (custom hook)
import { useState, useEffect } from 'react';
import { verifyToken } from '../api/authApi.jsx';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await verifyToken();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, []);

  return { isAuthenticated, loading };
};

export default useAuth;
