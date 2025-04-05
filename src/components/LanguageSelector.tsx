
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button 
      className="flex items-center gap-2 font-mono text-xs uppercase hover:underline"
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4" />
      {language === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageSelector;
