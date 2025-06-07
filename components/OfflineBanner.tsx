
import React from 'react';
import { WifiSlashIcon } from './Icons'; // Assuming Icons.tsx exists

const OfflineBanner: React.FC = () => {
  return (
    <div className="bg-red-500 text-white text-center p-2 text-sm flex items-center justify-center">
      <WifiSlashIcon className="w-5 h-5 mr-2" />
      You are currently offline. Some features may be limited.
    </div>
  );
};

export default OfflineBanner;
    