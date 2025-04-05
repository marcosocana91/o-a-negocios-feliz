
import React from 'react';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        <div className="content-box">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-widest font-mono">
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
