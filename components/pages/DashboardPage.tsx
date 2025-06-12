
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import WeatherWidget from '../WeatherWidget';
import { AppContext } from '../../AppContext';
import { TEXTS } from '../../constants';
import { LightBulbIcon, ShoppingBagIcon, InformationCircleIcon, UsersIcon, SparklesIcon, ChevronRightIcon } from '../Icons'; // Assuming Icons.tsx exists

const DashboardPage: React.FC = () => {
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  const quickLinks = [
    { name: texts.askAgriExpert, path: '/farming-support', icon: <SparklesIcon className="w-8 h-8 text-yellow-500" />, color: 'bg-yellow-100 dark:bg-yellow-800 hover:bg-yellow-200 dark:hover:bg-yellow-700' },
    { name: texts.marketPrices, path: '/market', icon: <ShoppingBagIcon className="w-8 h-8 text-red-500" />, color: 'bg-red-100 dark:bg-red-800 hover:bg-red-200 dark:hover:bg-red-700' },
    { name: texts.govtSchemes, path: '/schemes', icon: <InformationCircleIcon className="w-8 h-8 text-blue-500" />, color: 'bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700' },
    { name: texts.communityForum, path: '/community', icon: <UsersIcon className="w-8 h-8 text-purple-500" />, color: 'bg-purple-100 dark:bg-purple-800 hover:bg-purple-200 dark:hover:bg-purple-700' },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-gradient-to-r from-primary to-green-600 dark:from-green-700 dark:to-green-800 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{texts.welcome}</h1>
        <p className="text-lg text-green-100 dark:text-green-200">Your trusted companion for modern farming.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-black-50 dark:text-white-500">Quick Access</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {quickLinks.map(link => (
            <Link to={link.path} key={link.name}>
              <Card className={`text-center ${link.color} transition-transform transform hover:scale-105`}>
                <div className="flex justify-center mb-3">{link.icon}</div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-100">{link.name}</h3>
                <ChevronRightIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 mx-auto mt-2" />
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WeatherWidget />
        <Card title="Today's Farming Tip" className="bg-orange-500 dark:bg-orange-700 text-white">
            <div className="flex items-start space-x-3">
                <LightBulbIcon className="w-8 h-8 text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                    <p className="text-lg">Consider intercropping legumes with your main cereal crop to improve soil fertility and reduce pest incidence.</p>
                    <a href="#" className="text-sm font-semibold text-yellow-200 hover:text-yellow-100 mt-2 inline-block">Learn more &raquo;</a>
                </div>
            </div>
        </Card>
      </div>

    </div>
  );
};

export default DashboardPage;
    