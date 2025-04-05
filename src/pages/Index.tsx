
import React, { useState, useEffect } from 'react';
import Translator from '../components/Translator';
import WelcomeModal from '../components/WelcomeModal';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  
  // Check if user has already visited
  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (visited) {
      setShowModal(false);
      setHasVisited(true);
    }
  }, []);
  
  // Handle modal close
  const handleCloseModal = () => {
    localStorage.setItem('hasVisited', 'true');
    setHasVisited(true);
    setShowModal(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      
      <Navigation />
      
      <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-widest border-b-2 border-black pb-4">
            {t("translator.title")}
          </h1>
          <p className="text-translator-text/70 text-xs uppercase tracking-wide mb-0 font-mono">
            {t("translator.subtitle")}
          </p>
        </div>
        
        <Translator />
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Index;
