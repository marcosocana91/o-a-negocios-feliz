
import React, { useState, useEffect } from 'react';
import { getRandomTranslationPair, TranslationPair } from '../data/translationPairs';
import TranslateButton from './TranslateButton';
import ShareButton from './ShareButton';
import { ArrowDown } from 'lucide-react';
import ConfettiEffect from './ConfettiEffect';

const Translator: React.FC = () => {
  const [translationPair, setTranslationPair] = useState<TranslationPair>({
    design: "",
    business: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(false);

  const generateTranslation = () => {
    setIsLoading(true);
    setShowAnimation(true);
    setConfettiTrigger(prev => !prev); // Toggle to trigger confetti
    
    // Simulamos una pequeña demora para dar efecto de "traducción"
    setTimeout(() => {
      const newPair = getRandomTranslationPair();
      setTranslationPair(newPair);
      setIsLoading(false);
    }, 600);
  };

  // Generar una traducción inicial al cargar
  useEffect(() => {
    generateTranslation();
  }, []);

  return (
    <div className="max-w-2xl w-full mx-auto border-2 border-black animate-fade-in bg-white">
      <ConfettiEffect trigger={confettiTrigger} />
      
      <div className="p-8 space-y-8">
        <div>
          <label htmlFor="design-text" className="block text-sm font-mono mb-4 text-translator-text uppercase tracking-wider">
            Cuando diseño dice:
          </label>
          <div
            id="design-text"
            className="font-serif text-xl p-5 min-h-[120px] border-2 border-black w-full font-medium"
          >
            {isLoading ? (
              <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div>
            ) : (
              translationPair.design
            )}
          </div>
        </div>
        
        <div className="flex justify-center py-3">
          <div className={`${showAnimation ? 'animate-bounce-light' : ''}`}>
            <ArrowDown className="h-5 w-5 text-black" />
          </div>
        </div>
        
        <div>
          <label htmlFor="business-text" className="block text-sm font-mono mb-4 text-translator-text uppercase tracking-wider">
            Negocio debería entender:
          </label>
          <div
            id="business-text"
            className="font-serif text-xl p-5 min-h-[120px] border-2 border-black w-full font-medium"
          >
            {isLoading ? (
              <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div>
            ) : (
              translationPair.business
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <TranslateButton onClick={generateTranslation} text="Traducir ahora" />
          {!isLoading && translationPair.design && (
            <ShareButton 
              designText={translationPair.design}
              businessText={translationPair.business}
            />
          )}
        </div>
      </div>
      
      <div className="border-t-2 border-black py-3 px-8">
        <p className="text-center text-xs font-mono text-translator-text/70">
          Diseño y negocio. Dos mundos, un lenguaje.
        </p>
      </div>
    </div>
  );
};

export default Translator;
