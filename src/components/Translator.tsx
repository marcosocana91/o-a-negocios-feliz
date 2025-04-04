
import React, { useState, useEffect } from 'react';
import { getRandomTranslationPair, TranslationPair } from '../data/translationPairs';
import TranslateButton from './TranslateButton';
import ShareButton from './ShareButton';
import { ArrowDown } from 'lucide-react';

const Translator: React.FC = () => {
  const [translationPair, setTranslationPair] = useState<TranslationPair>({
    design: "",
    business: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const generateTranslation = () => {
    setIsLoading(true);
    setShowAnimation(true);
    
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
    <div className="custom-card max-w-2xl w-full mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold mb-8 text-center uppercase tracking-wider">Traductor</h2>
      
      <div className="space-y-8">
        <div>
          <label htmlFor="design-text" className="block text-sm font-medium mb-3 text-translator-text/90 uppercase tracking-wider">
            Cuando diseño dice:
          </label>
          <div
            id="design-text"
            className="textarea-field w-full resize-none"
          >
            {isLoading ? (
              <div className="animate-pulse h-6 bg-translator-accent/10 rounded w-3/4 mx-auto mt-4"></div>
            ) : (
              translationPair.design
            )}
          </div>
        </div>
        
        <div className="flex justify-center my-6">
          <div className={`p-2 rounded-full bg-translator-secondary/10 ${showAnimation ? 'animate-bounce-light' : ''}`}>
            <ArrowDown className="h-5 w-5 text-translator-secondary" />
          </div>
        </div>
        
        <div>
          <label htmlFor="business-text" className="block text-sm font-medium mb-3 text-translator-text/90 uppercase tracking-wider">
            Negocio debería entender:
          </label>
          <div
            id="business-text"
            className="textarea-field w-full resize-none"
          >
            {isLoading ? (
              <div className="animate-pulse h-6 bg-translator-accent/10 rounded w-3/4 mx-auto mt-4"></div>
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
      
      <p className="text-center text-xs text-translator-text/50 mt-10">
        Diseño y negocio. Dos mundos, un lenguaje.
      </p>
    </div>
  );
};

export default Translator;
