
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import MobileMenu from './MobileMenu';
import { useIsMobile } from '../hooks/use-mobile';
import Logo from './Logo';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  return (
    <nav className="border-b-2 border-black py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        <div className="hidden md:flex space-x-6 items-center">
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
        
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navigation;
