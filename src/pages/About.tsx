
import React from 'react';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest border-b-2 border-black pb-4">
          {t("about.title")}
        </h1>
        
        <div className="font-serif text-lg space-y-6">
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
      
      <FooterBanner />
    </div>
  );
};

export default About;
