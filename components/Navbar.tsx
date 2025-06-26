import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext, Language } from '../AppContext';
import { SunIcon, MoonIcon, GlobeAltIcon, UserCircleIcon, ArrowLeftOnRectangleIcon } from './Icons';


interface NavbarProps {
  appName: string;
}

const Navbar: React.FC<NavbarProps> = ({ appName }) => {
  const context = useContext(AppContext);
  const navigate = useNavigate();

  if (!context) {
    return null; // Or some fallback UI
  }

  const { language, setLanguage, theme, toggleTheme, isAuthenticated, logout } = context;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as Language);
  };

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/farming-support', label: 'Farming Intel' },
    { path: '/market', label: 'Market' },
    { path: '/schemes', label: 'Schemes' },
    { path: '/community', label: 'Community' },
    { path: '/income', label: 'Income Hub' },
  ];

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout(); // logout function from context will handle navigation
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-primary dark:bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity">
        <img src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxfahx3fep7sjf4hb83kx318%2F1749639886_img_2.webp?st=2025-06-26T05%3A52%3A12Z&se=2025-07-02T06%3A52%3A12Z&sks=b&skt=2025-06-26T05%3A52%3A12Z&ske=2025-07-02T06%3A52%3A12Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=UbslpArBE%2Ba%2FPT1Q81t1Q9nJZYT0SO%2FHbQM5LucZP3c%3D&az=oaivgprodscus" alt="Krishi Mitra Logo" className="h-20 w-18 object-contain" />
          {/* {appName} */}
        </Link>
        
        <nav className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="hover:text-green-200 dark:hover:text-green-300 transition-colors px-2 py-1 rounded-md text-md font-medium">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
          
          <div className="relative">
            <GlobeAltIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <select
              value={language}
              onChange={handleLanguageChange}
              className="bg-white/20 dark:bg-black/20 text-white dark:text-gray-200 pl-8 pr-2 py-1.5 rounded-md text-sm focus:ring-2 focus:ring-white outline-none appearance-none"
              aria-label="Select language"
            >
              <option value={Language.EN} className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700">English</option>
              <option value={Language.HI} className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700">हिन्दी</option>
              {/* <option value={Language.TA} className="text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700">தமிழ்</option> */}
            </select>
          </div>
          <button
            onClick={handleAuthAction}
            className="p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
            aria-label={isAuthenticated ? "Logout" : "Login or Sign Up"}
            title={isAuthenticated ? "Logout" : "Login / Sign Up"}
          >
            {isAuthenticated ? <ArrowLeftOnRectangleIcon className="w-6 h-6" /> : <UserCircleIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
