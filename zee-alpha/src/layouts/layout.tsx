// components/Layout.tsx
import { type ReactNode } from 'react';
import { Header } from '../components/landing page/Header';
import { useAuthState } from '../custom hooks/useAuthState';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated, userEmail, logout } = useAuthState();

  return (
    <div className="min-h-screen bg-white">
      <Header 
        isAuthenticated={isAuthenticated}
        userEmail={userEmail}
        onLogout={logout}
      />
      <main>{children}</main>
    </div>
  );
}