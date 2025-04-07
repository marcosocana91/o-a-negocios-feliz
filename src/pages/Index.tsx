
import React, { useState, useEffect } from 'react';
import Translator from '../components/Translator';
import WelcomeModal from '../components/WelcomeModal';
import PromotionalModal from '../components/PromotionalModal';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const { t } = useLanguage();
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [showPromotionalModal, setShowPromotionalModal] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);
  const isMobile = useIsMobile();

  // Check if user has already visited
  useEffect(() => {
    const visited = localStorage.getItem('hasVisited');
    if (visited) {
      setShowWelcomeModal(false);
      setHasVisited(true);
    }
  }, []);

  // Handle welcome modal close
  const handleCloseWelcomeModal = () => {
    localStorage.setItem('hasVisited', 'true');
    setHasVisited(true);
    setShowWelcomeModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col brutalist-grid">
      {showWelcomeModal && <WelcomeModal onClose={handleCloseWelcomeModal} />}
      <PromotionalModal open={showPromotionalModal} onOpenChange={setShowPromotionalModal} />
      
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {!isMobile && (
          <div className="mb-8 md:mb-12 text-center">
            <p className="text-translator-text/70 text-xs uppercase tracking-wide mb-0 font-mono">
              {t("translator.subtitle")}
            </p>
          </div>
        )}
        
        <Translator />
        
        {!isMobile && <div className="mt-12 text-center"></div>}
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Index;
