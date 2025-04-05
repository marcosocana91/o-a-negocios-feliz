
import React from 'react';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';

const Manifesto: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <div className="brutalist-box">
          <h1 className="brutalist-title mb-8">
            {t("manifesto.title")}
          </h1>
          
          <div className="font-sans text-lg space-y-6">
            <p>
              {t("manifesto.p1")}
            </p>
            
            <p>
              {t("manifesto.p2")}
            </p>
            
            <p>
              {t("manifesto.p3")}
            </p>
            
            <p>
              {t("manifesto.p4")}
            </p>
            
            <p>
              {t("manifesto.p5")}
            </p>
            
            <p className="border-t-2 border-black pt-6 mt-8 font-mono uppercase text-sm tracking-wider text-center">
              {t("manifesto.footer")}
            </p>
          </div>
        </div>
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Manifesto;
