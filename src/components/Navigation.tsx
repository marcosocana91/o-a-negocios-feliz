
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();
  
  return (
    <nav className="border-b-2 border-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold font-mono uppercase text-md tracking-widest">
          When design says...
        </div>
        
        <div className="flex space-x-6 items-center">
          <Link 
            to="/" 
            className={`font-mono uppercase text-sm tracking-wider ${
              location.pathname === '/' ? 'underline' : ''
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link 
            to="/manifesto" 
            className={`font-mono uppercase text-sm tracking-wider ${
              location.pathname === '/manifesto' ? 'underline' : ''
            }`}
          >
            {t("nav.manifesto")}
          </Link>
          <Link 
            to="/about" 
            className={`font-mono uppercase text-sm tracking-wider ${
              location.pathname === '/about' ? 'underline' : ''
            }`}
          >
            {t("nav.about")}
          </Link>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
