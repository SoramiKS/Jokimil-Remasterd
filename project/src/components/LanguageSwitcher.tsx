import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <div className="flex items-center space-x-2 bg-gray-900/50 border border-red-900/20 rounded-lg px-3 py-2">
        <Globe className="h-4 w-4 text-red-400" />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'id')}
          className="bg-transparent text-white text-sm border-none outline-none cursor-pointer"
        >
          <option value="en" className="bg-gray-900 text-white">English</option>
          <option value="id" className="bg-gray-900 text-white">Indonesia</option>
        </select>
      </div>
    </div>
  );
};

export default LanguageSwitcher;