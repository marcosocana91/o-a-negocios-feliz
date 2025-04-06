
import React, { useState, useEffect } from 'react';
import { getRandomTranslationPair, TranslationPair } from '../data/translationPairs';
import TranslateButton from './TranslateButton';
import ShareButton from './ShareButton';
import { ArrowDown, RefreshCw } from 'lucide-react';
import ConfettiEffect from './ConfettiEffect';
import { useLanguage } from '../context/LanguageContext';

const Translator: React.FC = () => {
  const { t, language } = useLanguage();
  const [translationPair, setTranslationPair] = useState<TranslationPair>({
    design: "",
    business: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(false);
  const [direction, setDirection] = useState<'design-to-business' | 'business-to-design'>('design-to-business');
  
  const generateTranslation = () => {
    setIsLoading(true);
    setShowAnimation(true);
    setConfettiTrigger(prev => !prev); // Toggle to trigger confetti
    
    // Simulamos una pequeña demora para dar efecto de "traducción"
    setTimeout(() => {
      const newPair = getRandomTranslationPair(language as 'es' | 'en');
      setTranslationPair(newPair);
      setIsLoading(false);
    }, 600);
  };

  const toggleDirection = () => {
    setDirection(prev => 
      prev === 'design-to-business' ? 'business-to-design' : 'design-to-business'
    );
  };

  // Generar una traducción inicial al cargar
  useEffect(() => {
    generateTranslation();
  }, [language]);

  const sourceLabel = direction === 'design-to-business' ? t("translator.designSays") : t("translator.businessSays");
  const targetLabel = direction === 'design-to-business' ? t("translator.businessUnderstands") : t("translator.designUnderstands");
  
  const sourceText = direction === 'design-to-business' ? translationPair.design : translationPair.business;
  const targetText = direction === 'design-to-business' ? translationPair.business : translationPair.design;

  return (
    <div className="max-w-2xl w-full mx-auto border-2 border-black bg-white">
      <ConfettiEffect trigger={confettiTrigger} />
      
      <div className="p-6 sm:p-8 space-y-8">
        <div className="flex justify-end">
          <button 
            onClick={toggleDirection}
            className="flex items-center gap-2 font-mono text-xs uppercase hover:underline"
          >
            <RefreshCw className="h-4 w-4" />
            {t("nav.switchDirection")}
          </button>
        </div>
        
        <div>
          <label htmlFor="source-text" className="block text-sm font-mono mb-4 uppercase tracking-wider">
            {sourceLabel}
          </label>
          <div
            id="source-text"
            className="font-serif text-xl p-5 min-h-[120px] border-2 border-black w-full font-medium"
          >
            {isLoading ? (
              <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div>
            ) : (
              sourceText
            )}
          </div>
        </div>
        
        <div className="flex justify-center py-3">
          <div className={`${showAnimation ? 'animate-bounce-light' : ''}`}>
            <ArrowDown className="h-5 w-5 text-black" />
          </div>
        </div>
        
        <div>
          <label htmlFor="target-text" className="block text-sm font-mono mb-4 uppercase tracking-wider">
            {targetLabel}
          </label>
          <div
            id="target-text"
            className="font-serif text-xl p-5 min-h-[120px] border-2 border-black w-full font-medium"
          >
            {isLoading ? (
              <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div>
            ) : (
              targetText
            )}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <TranslateButton onClick={generateTranslation} text={t("translator.translate")} />
          {!isLoading && sourceText && (
            <ShareButton 
              designText={direction === 'design-to-business' ? sourceText : targetText}
              businessText={direction === 'design-to-business' ? targetText : sourceText}
            />
          )}
        </div>
      </div>
      
      <div className="border-t-2 border-black py-3 px-8">
        <p className="text-center text-xs font-mono text-translator-text/70">
          {t("translator.footer")}
        </p>
      </div>
    </div>
  );
};

export default Translator;
