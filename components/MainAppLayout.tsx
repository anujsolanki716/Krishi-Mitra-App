
import React, { useContext } from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import DashboardPage from './pages/DashboardPage';
import FarmingSupportPage from './pages/FarmingSupportPage';
import MarketLinkPage from './pages/MarketLinkPage';
import GovSchemesPage from './pages/GovSchemesPage';
import CommunityPage from './pages/CommunityPage';
import IncomePage from './pages/IncomePage';
import ProtectedRoute from './ProtectedRoute';
import { AppContext } from '../AppContext';

interface NavLinkItem {
  path: string;
  label: string;
  icon: JSX.Element;
}
interface MainAppLayoutProps {
  navLinks: NavLinkItem[];
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ navLinks }) => {
  const context = useContext(AppContext);
  const location = useLocation();

  if (!context) {
     // This should ideally be caught by a higher-level error boundary or App.tsx check
    return <p className="text-center text-red-500 p-4">Critical Error: Application context failed to load in MainAppLayout.</p>;
  }
  const { isAuthenticated, theme } = context;

  return (
    <>
      <Navbar appName="Krishi Mitra" />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-8"> {/* Adjusted padding slightly */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/farming-support" element={<ProtectedRoute><FarmingSupportPage /></ProtectedRoute>} />
          <Route path="/market" element={<ProtectedRoute><MarketLinkPage /></ProtectedRoute>} />
          <Route path="/schemes" element={<ProtectedRoute><GovSchemesPage /></ProtectedRoute>} />
          <Route path="/community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
          <Route path="/income" element={<ProtectedRoute><IncomePage /></ProtectedRoute>} />
          {/* Fallback for any other path not explicitly handled under /*, excluding /auth handled in App.tsx */}
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </main>
      
      {isAuthenticated && (
        <>
          <nav className={`fixed bottom-0 left-0 right-0 bg-white ${theme === 'dark' ? 'dark:bg-gray-800 dark:border-gray-700' : 'border-gray-200'} shadow-t-lg border-t  md:hidden z-40`}>
            <div className="max-w-md mx-auto flex justify-around">
              {navLinks.slice(0, 6).map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex flex-col items-center justify-center p-2 text-xs hover:bg-primary/10 ${theme === 'dark' ? 'dark:hover:bg-primary/20' : ''} ${location.pathname === link.path ? (theme === 'dark' ? 'text-green-400' : 'text-primary') : (theme === 'dark' ? 'text-gray-400' : 'text-gray-600')}`}
                  title={link.label}
                >
                  {React.cloneElement(link.icon, { className: "w-5 h-5" })}
                  <span className="mt-1">{link.label.split(' ')[0]}</span>
                </Link>
              ))}
            </div>
          </nav>
          <div className="pb-16 md:pb-0"></div> {/* Placeholder for bottom nav */}
        </>
      )}
      <Footer />
    </>
  );
};

export default MainAppLayout;
