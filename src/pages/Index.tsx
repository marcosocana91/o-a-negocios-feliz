import React, { useState, useEffect } from 'react';
import Translator from '../components/Translator';
import WelcomeModal from '../components/WelcomeModal';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
const Index = () => {
  const {
    t
  } = useLanguage();
  const [showModal, setShowModal] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  const isMobile = useIsMobile();

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
  return <div className="min-h-screen flex flex-col brutalist-grid">
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {!isMobile && <div className="mb-8 md:mb-12 text-center">
            
            <p className="text-translator-text/70 text-xs uppercase tracking-wide mb-0 font-mono">
              {t("translator.subtitle")}
            </p>
          </div>}
        
        <Translator />
        
        {!isMobile && <div className="mt-12 text-center">
            
          </div>}
      </div>
      
      <FooterBanner />
    </div>;
};
export default Index;