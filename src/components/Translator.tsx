
import React, { useState, useEffect } from 'react';
import { getTranslationByCategory, TranslationPair, TranslationCategory } from '../data/translationPairs';
import TranslateButton from './TranslateButton';
import ShareButton from './ShareButton';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, ArrowDown } from 'lucide-react';

const Translator: React.FC = () => {
  const {
    t,
    language
  } = useLanguage();
  const [translationPair, setTranslationPair] = useState<TranslationPair>({
    design: "",
    business: "",
    marketing: "",
    development: "",
    family: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [reverseDirection, setReverseDirection] = useState(false);
  
  const generateTranslation = () => {
    setIsLoading(true);

    // Simulamos una pequeña demora para dar efecto de "traducción"
    setTimeout(() => {
      const newPair = getTranslationByCategory(language as 'es' | 'en', 'business');
      setTranslationPair(newPair);
      setIsLoading(false);
    }, 600);
  };

  // Generar una traducción inicial al cargar
  useEffect(() => {
    generateTranslation();
  }, [language]);

  const handleDirectionToggle = () => {
    setReverseDirection(!reverseDirection);
  };

  const renderBoxes = () => {
    const designBox = (
      <div>
        <label htmlFor="design-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
          {t("translator.designSays")}
        </label>
        <div id="design-text" className="font-serif text-xl p-5 min-h-[100px] border-2 border-black w-full font-medium bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {isLoading ? <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.design}
        </div>
      </div>
    );

    const businessBox = (
      <div>
        <label htmlFor="business-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
          {t("translator.businessUnderstands")}
        </label>
        <div id="business-text" className="font-serif text-xl p-5 min-h-[100px] border-2 border-black w-full font-medium bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          {isLoading ? <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.business}
        </div>
      </div>
    );

    return reverseDirection ? [businessBox, designBox] : [designBox, businessBox];
  };

  return (
    <div className="max-w-4xl w-full mx-auto border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="p-6 sm:p-8 space-y-10">
        {/* Main content boxes */}
        <div className="space-y-10">
          {renderBoxes()[0]}
          
          {/* Direction toggle button */}
          <div className="flex justify-center">
            <button 
              onClick={handleDirectionToggle}
              className="p-2 border-2 border-black bg-white hover:bg-black hover:text-white transition-colors"
              aria-label={t("nav.switchDirection")}
            >
              {reverseDirection ? <ArrowDown className="h-5 w-5" /> : <ArrowUp className="h-5 w-5" />}
            </button>
          </div>
          
          {renderBoxes()[1]}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <TranslateButton onClick={generateTranslation} text={t("translator.translate")} />
          {!isLoading && translationPair.design && 
            <ShareButton 
              designText={translationPair.design} 
              businessText={translationPair.business} 
              marketingText="" 
              developmentText="" 
              familyText="" 
              currentCategory="business" 
            />
          }
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
