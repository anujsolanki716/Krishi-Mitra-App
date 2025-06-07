
import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, Navigate } from 'react-router-dom';
import AuthPage from './components/pages/AuthPage';
import OfflineBanner from './components/OfflineBanner';
import { Language, AppContext, AppContextType } from './AppContext';
import { HomeIcon, LightBulbIcon, ShoppingBagIcon, BanknotesIcon, UsersIcon, InformationCircleIcon } from './components/Icons';
import MainAppLayout from './components/MainAppLayout'; // New Layout Component
import LoadingSpinner from './components/LoadingSpinner';

const LoadingScreenPlaceholder: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <LoadingSpinner text="Loading Krishi Mitra..." size="lg" />
  </div>
);

const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);

  const navigate = useNavigate(); // Keep navigate for logout

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoadingAuth(false);
  }, []);

  const login = () => {
    localStorage.setItem('authToken', 'dummyUserToken');
    setIsAuthenticated(true);
    // Navigation is now handled by the component initiating login (e.g., AuthPage)
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    navigate('/auth'); // Logout directs to auth page
  };

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark:bg-gray-900', 'dark:text-gray-200');
      document.body.classList.remove('bg-background', 'text-textPrimary');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark:bg-gray-900', 'dark:text-gray-200');
      document.body.classList.add('bg-background', 'text-textPrimary');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const navLinks = [
    { path: '/', label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" /> },
    { path: '/farming-support', label: 'Farming Intel', icon: <LightBulbIcon className="w-5 h-5" /> },
    { path: '/market', label: 'Market Connect', icon: <ShoppingBagIcon className="w-5 h-5" /> },
    { path: '/schemes', label: 'Govt. Schemes', icon: <InformationCircleIcon className="w-5 h-5" /> },
    { path: '/community', label: 'Community', icon: <UsersIcon className="w-5 h-5" /> },
    { path: '/income', label: 'Income Hub', icon: <BanknotesIcon className="w-5 h-5" /> },
  ];

  const appContextValue: AppContextType = {
    language,
    setLanguage,
    theme,
    toggleTheme,
    isAuthenticated,
    login,
    logout,
    isLoadingAuth, // Pass isLoadingAuth to context
  };

  if (isLoadingAuth) {
    return <LoadingScreenPlaceholder />;
  }

  return (
    <AppContext.Provider value={appContextValue}>
      <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark bg-gray-900 text-gray-200' : 'bg-background text-textPrimary'} transition-colors duration-300`}>
        {!isOnline && <OfflineBanner />}
        
        <Routes>
          <Route 
            path="/auth" 
            element={isAuthenticated ? <Navigate to="/" replace /> : <AuthPage />} 
          />
          <Route 
            path="/*" 
            element={<MainAppLayout navLinks={navLinks} />} 
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
