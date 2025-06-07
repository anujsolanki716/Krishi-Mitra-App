
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AppContext } from '../AppContext';
import LoadingSpinner from './LoadingSpinner';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  if (!context) {
    console.error("AppContext not available in ProtectedRoute");
    return <p className="text-center text-red-500 p-4">Error: Application context is not available. Please refresh.</p>;
  }
  
  const { isAuthenticated, isLoadingAuth } = context;

  if (isLoadingAuth) {
    return (
      <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 250px)' }}> {/* Adjust minHeight based on Navbar/Footer */}
        <LoadingSpinner text="Verifying access..." size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
