
import React, { useState, useContext } from 'react';
import Card from '../Card';
import { LocalBusiness } from '../../types';
import { mockLocalBusinesses } from '../../services/mockDataService';
import { AppContext } from '../../AppContext';
import { TEXTS } from '../../constants';
import { BuildingStorefrontIcon, CurrencyRupeeIcon, LightBulbIcon } from '../Icons'; // Assuming Icons.tsx exists

const BusinessCard: React.FC<{ business: LocalBusiness }> = ({ business }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <img 
      src={business.imageUrl || `https://picsum.photos/seed/${business.id}/300/150`} 
      alt={business.name} 
      className="w-full h-40 object-cover rounded-t-lg mb-3" 
    />
    <h3 className="text-lg font-semibold text-primary dark:text-green-400">{business.name}</h3>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{business.category}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{business.description}</p>
    <p className="text-sm font-medium text-accent dark:text-blue-400">Contact: {business.contact}</p>
    <p className="text-xs text-gray-500 dark:text-gray-500">Location: {business.location}</p>
  </Card>
);

const IncomePage: React.FC = () => {
  const [businesses] = useState<LocalBusiness[]>(mockLocalBusinesses);
  
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  const incomeIdeas = [
    { title: "Value Addition to Crops", description: "Process your crops (e.g., making pickles, jams, flour) to sell at higher prices.", icon: <CurrencyRupeeIcon className="w-8 h-8 text-orange-500" /> },
    { title: "Livestock Rearing", description: "Dairy, poultry, or goat farming can provide consistent supplementary income.", icon: <CurrencyRupeeIcon className="w-8 h-8 text-orange-500" /> },
    { title: "Agri-Tourism", description: "If your farm is scenic, consider opening it for tourists to experience rural life.", icon: <CurrencyRupeeIcon className="w-8 h-8 text-orange-500" /> },
    { title: "Handicrafts & Local Products", description: "Utilize local skills to create and sell handicrafts or unique village products online or in local markets.", icon: <CurrencyRupeeIcon className="w-8 h-8 text-orange-500" /> },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <CurrencyRupeeIcon className="w-10 h-10 text-primary dark:text-green-400" />
        <h1 className="text-3xl font-bold text-black-50 dark:text-white-500">{texts.incomeTitle}</h1>
      </div>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-1000 dark:text-gray-500 flex items-center">
            <LightBulbIcon className="w-7 h-7 mr-2 text-yellow-500 dark:text-yellow-400"/>
            Income Generation Ideas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {incomeIdeas.map(idea => (
            <Card key={idea.title} className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-400">
              <div className="flex items-start space-x-3">
                {idea.icon}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-200">{idea.title}</h3>
                  <p className="text-sm text-yellow-600 dark:text-yellow-300">{idea.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-1000 dark:text-gray-500 flex items-center">
            <BuildingStorefrontIcon className="w-7 h-7 mr-2 text-indigo-500 dark:text-indigo-400"/>
            Local Business & Service Listings
        </h2>
        {businesses.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No local businesses listed yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map(business => <BusinessCard key={business.id} business={business} />)}
          </div>
        )}
        <button className="mt-6 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition-colors">
            <BuildingStorefrontIcon className="w-5 h-5 mr-2"/> List Your Business/Service
        </button>
      </section>
    </div>
  );
};

export default IncomePage;
    