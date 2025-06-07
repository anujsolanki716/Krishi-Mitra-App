
import React from 'react';
import { GovernmentScheme } from '../types';
import Card from './Card';
import { InformationCircleIcon } from './Icons'; // Assuming Icons.tsx exists

interface GovSchemeCardProps {
  scheme: GovernmentScheme;
}

const GovSchemeCard: React.FC<GovSchemeCardProps> = ({ scheme }) => {
  return (
    <Card className="border-l-4 border-accent dark:border-blue-400 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-3">
        <InformationCircleIcon className="w-8 h-8 text-accent dark:text-blue-400 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-lg font-semibold text-accent dark:text-blue-300 mb-1">{scheme.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-3">{scheme.description}</p>
          <details className="text-xs">
            <summary className="cursor-pointer text-accent dark:text-blue-400 hover:underline">
              Learn More
            </summary>
            <div className="mt-2 space-y-1">
              <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
              <p><strong>Benefits:</strong> {scheme.benefits}</p>
              <p><strong>How to Apply:</strong> {scheme.howToApply}</p>
              {scheme.link && (
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-green-400 hover:underline font-medium block mt-1"
                >
                  Official Link
                </a>
              )}
            </div>
          </details>
        </div>
      </div>
    </Card>
  );
};

export default GovSchemeCard;
    