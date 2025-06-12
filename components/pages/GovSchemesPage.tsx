
import React, { useContext } from 'react';
import { GovernmentScheme } from '../../types';
import GovSchemeCard from '../GovSchemeCard';
import { mockGovernmentSchemes } from '../../services/mockDataService';
import { AppContext } from '../../AppContext';
import { TEXTS } from '../../constants';
import { BanknotesIcon } from '../Icons'; // Assuming Icons.tsx exists


const GovSchemesPage: React.FC = () => {
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];

  // Filter schemes by current language
  const schemes: GovernmentScheme[] = mockGovernmentSchemes.filter(s => s.language === lang);
  const allLanguageSchemes: GovernmentScheme[] = mockGovernmentSchemes;


  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <BanknotesIcon className="w-10 h-10 text-primary dark:text-green-400" />
        <h1 className="text-3xl font-bold text-black-50 dark:text-white-500">{texts.govSchemesTitle}</h1>
      </div>
      
      <p className="text-gray-1000 dark:text-gray-500">
        Explore various government schemes designed to support farmers and rural development. 
        Information is available in multiple languages.
      </p>

      {schemes.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-4">
          No schemes available in the selected language ({lang.toUpperCase()}). Showing all schemes.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {(schemes.length > 0 ? schemes : allLanguageSchemes).map(scheme => (
          <GovSchemeCard key={scheme.id} scheme={scheme} />
        ))}
      </div>
    </div>
  );
};

export default GovSchemesPage;
    