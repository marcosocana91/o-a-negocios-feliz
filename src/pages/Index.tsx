
import React, { useState, useEffect } from 'react';
import Translator from '../components/Translator';
import WelcomeModal from '../components/WelcomeModal';
import Navigation from '../components/Navigation';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      {showModal && <WelcomeModal onClose={handleCloseModal} />}
      
      <Navigation />
      
      <div className="flex-grow container mx-auto px-4 py-8 md:py-16">
        <div className="mb-8 md:mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest font-mono border-b-2 border-black pb-4 inline-block">
            {t("translator.title")}
          </h1>
          <p className="text-translator-text/70 text-xs uppercase tracking-wide mb-0 font-mono">
            {t("translator.subtitle")}
          </p>
        </div>
        
        <Translator />
        
        <div className="mt-12 text-center">
          <Link 
            to="/quiz"
            className="inline-flex items-center gap-2 py-3 px-10 bg-black text-white font-mono text-sm uppercase hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors"
          >
            <span>Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Index;
