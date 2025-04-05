
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile menu panel */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } border-l border-black`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={closeMenu}
            className="p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col px-4 py-6 space-y-8">
          <Link 
            to="/" 
            className={`font-mono uppercase text-lg tracking-wider ${
              location.pathname === '/' ? 'underline' : ''
            }`}
            onClick={closeMenu}
          >
            {t("nav.home")}
          </Link>
          <Link 
            to="/manifesto" 
            className={`font-mono uppercase text-lg tracking-wider ${
              location.pathname === '/manifesto' ? 'underline' : ''
            }`}
            onClick={closeMenu}
          >
            {t("nav.manifesto")}
          </Link>
          <Link 
            to="/about" 
            className={`font-mono uppercase text-lg tracking-wider ${
              location.pathname === '/about' ? 'underline' : ''
            }`}
            onClick={closeMenu}
          >
            {t("nav.about")}
          </Link>
          <div className="pt-4 border-t border-gray-200">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
