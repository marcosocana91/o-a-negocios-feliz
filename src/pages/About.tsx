
import React from 'react';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col brutalist-grid">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <div className="brutalist-box shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="brutalist-title mb-8">
            {t("about.title")}
          </h1>
          
          <div className="font-sans text-lg space-y-6">
            <p>
              {t("about.p1")}
            </p>
            
            <p>
              {t("about.p2")}
            </p>
            
            <p>
              {t("about.p3")}
            </p>
            
            <p>
              {t("about.p4")}
            </p>
          </div>
        </div>
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default About;
