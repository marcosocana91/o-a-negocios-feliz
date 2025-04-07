
import React, { useState, useEffect } from 'react';
import Translator from '../components/Translator';
import PromotionalModal from '../components/PromotionalModal';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const { t } = useLanguage();
  const [showPromotionalModal, setShowPromotionalModal] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col brutalist-grid">
      <PromotionalModal open={showPromotionalModal} onOpenChange={setShowPromotionalModal} />
      
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 pt-8 pb-4 md:pt-16 md:pb-8">
        {!isMobile && (
          <div className="mb-6 md:mb-8 text-center flex flex-col items-center">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/618598fa-3509-4bd8-8308-b734433e1f2d.png" 
                alt="When Design Says..." 
                className="h-8"
              />
            </div>
            <p className="text-translator-text/70 text-xs uppercase tracking-wide mb-0 font-mono">
              {t("translator.subtitle")}
            </p>
          </div>
        )}
        
        <Translator />
        
        {!isMobile && <div className="mt-8 text-center"></div>}
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Index;
