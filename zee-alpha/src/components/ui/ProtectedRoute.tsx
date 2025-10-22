// components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const admin = localStorage.getItem('admin');
  return admin ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;