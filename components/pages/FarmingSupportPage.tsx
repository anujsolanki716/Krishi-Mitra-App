
import React, { useState, useContext } from 'react';
import AIChatbot from '../AIChatbot';
import WeatherWidget from '../WeatherWidget';
import Card from '../Card';
import { Crop } from '../../types';
import { mockCrops } from '../../services/mockDataService';
import { AppContext } from '../../AppContext';
import { TEXTS } from '../../constants';
import { BookOpenIcon, ChevronDownIcon, ChevronUpIcon } from '../Icons'; // Assuming Icons.tsx exists

const CropInfoCard: React.FC<{ crop: Crop }> = ({ crop }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card className="mb-4 shadow-md hover:shadow-lg transition-shadow">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={crop.image} alt={crop.name} className="w-12 h-12 rounded-lg object-cover" />
          <h4 className="text-lg font-semibold text-primary dark:text-green-400">{crop.name}</h4>
        </div>
        {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
      </div>
      {isOpen && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-sm">
          <p className="mb-2">{crop.description}</p>
          {crop.plantingSeason && <p><strong>Planting Season:</strong> {crop.plantingSeason}</p>}
          {crop.harvestTime && <p><strong>Harvest Time:</strong> {crop.harvestTime}</p>}
        </div>
      )}
    </Card>
  );
};

const FarmingSupportPage: React.FC = () => {
  const crops = mockCrops;
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{texts.farmingSupportTitle}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
           <AIChatbot />
        </div>
        <div className="space-y-6">
          <WeatherWidget />
          <Card title="Quick Crop Guide" className="bg-lime-50 dark:bg-lime-900">
            <div className="flex items-center text-lime-700 dark:text-lime-300 mb-3">
                <BookOpenIcon className="w-6 h-6 mr-2"/>
                <h3 className="text-xl font-semibold">Crop Information</h3>
            </div>
            <div className="max-h-96 overflow-y-auto pr-2">
              {crops.map(crop => <CropInfoCard key={crop.id} crop={crop} />)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FarmingSupportPage;
    