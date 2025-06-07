
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Krishi Mitra. Empowering Farmers.
      </p>
    </footer>
  );
};

export default Footer;
    