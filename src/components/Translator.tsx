import React, { useState, useEffect } from 'react';
import { getTranslationByCategory, TranslationPair, TranslationCategory } from '../data/translationPairs';
import TranslateButton from './TranslateButton';
import ShareButton from './ShareButton';
import { useLanguage } from '../context/LanguageContext';
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
  return <div className="max-w-4xl w-full mx-auto border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="p-6 sm:p-8 space-y-8">
        {/* Design says box - Principal box */}
        <div>
          <label htmlFor="design-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
            {t("translator.designSays")}
          </label>
          <div id="design-text" className="font-serif text-xl p-5 min-h-[100px] border-2 border-black w-full font-medium bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {isLoading ? <div className="animate-pulse h-6 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.design}
          </div>
        </div>
        
        {/* Translations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Business box */}
          <div>
            <label htmlFor="business-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
              Negocio debería entender...
            </label>
            <div id="business-text" className="font-serif text-base p-4 min-h-[100px] border-2 border-black w-full font-medium bg-[#FFFAE0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {isLoading ? <div className="animate-pulse h-5 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.business}
            </div>
          </div>
          
          {/* Marketing box */}
          <div>
            <label htmlFor="marketing-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
              Marketing debería entender...
            </label>
            <div id="marketing-text" className="font-serif text-base p-4 min-h-[100px] border-2 border-black w-full font-medium bg-[#E9F4FF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {isLoading ? <div className="animate-pulse h-5 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.marketing}
            </div>
          </div>
          
          {/* Development box */}
          <div className="py-0 my-[14px]">
            <label htmlFor="development-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
              Desarrollo debería entender...
            </label>
            <div id="development-text" className="font-serif text-base p-4 min-h-[100px] border-2 border-black w-full font-medium bg-[#F0EBFF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {isLoading ? <div className="animate-pulse h-5 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.development}
            </div>
          </div>
          
          {/* Family box */}
          <div>
            <label htmlFor="family-text" className="block text-sm font-mono mb-4 uppercase tracking-wider font-bold">
              Tu familia debería entender...
            </label>
            <div id="family-text" className="font-serif text-base p-4 min-h-[100px] border-2 border-black w-full font-medium bg-[#FFF0F2] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {isLoading ? <div className="animate-pulse h-5 bg-gray-100 w-3/4 mx-auto mt-4"></div> : translationPair.family}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <TranslateButton onClick={generateTranslation} />
          {!isLoading && translationPair.design && <ShareButton designText={translationPair.design} businessText={translationPair.business} marketingText={translationPair.marketing} developmentText={translationPair.development} familyText={translationPair.family} currentCategory="business" />}
        </div>
      </div>
      
      <div className="border-t-2 border-black py-3 px-8">
        <p className="text-center text-xs font-mono text-translator-text/70">
          {t("translator.footer")}
        </p>
      </div>
    </div>;
};
export default Translator;