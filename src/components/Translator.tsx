
import React, { useState, useEffect } from 'react';
import { getTranslationByCategory, TranslationPair, TranslationCategory } from '../data/translationPairs';
import TranslateButton from './TranslateButton';
import ShareButton from './ShareButton';
import { ArrowUpDown } from 'lucide-react';
import ConfettiEffect from './ConfettiEffect';
import { useLanguage } from '../context/LanguageContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Translator: React.FC = () => {
  const { t, language } = useLanguage();
  const [translationPair, setTranslationPair] = useState<TranslationPair>({
    design: "",
    business: "",
    marketing: "",
    development: "",
    family: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [confettiTrigger, setConfettiTrigger] = useState(false);
  const [direction, setDirection] = useState<'design-to-audience' | 'audience-to-design'>('design-to-audience');
  const [category, setCategory] = useState<TranslationCategory>('business');
  
  const generateTranslation = () => {
    setIsLoading(true);
    setShowAnimation(true);
    setConfettiTrigger(prev => !prev); // Toggle to trigger confetti
    
    // Simulamos una pequeña demora para dar efecto de "traducción"
    setTimeout(() => {
      const newPair = getTranslationByCategory(language as 'es' | 'en', category);
      setTranslationPair(newPair);
      setIsLoading(false);
    }, 600);
  };

  const toggleDirection = () => {
    setDirection(prev => 
      prev === 'design-to-audience' ? 'audience-to-design' : 'design-to-audience'
    );
  };

  // Generar una traducción inicial al cargar
  useEffect(() => {
    generateTranslation();
  }, [language, category]);

  const getCategoryLabel = (): string => {
    switch(category) {
      case 'business':
        return t("translator.businessUnderstandsEllipsis");
      case 'marketing':
        return t("translator.marketingUnderstandsEllipsis");
      case 'development':
        return t("translator.developmentUnderstandsEllipsis");
      case 'family':
        return t("translator.familyUnderstandsEllipsis");
      default:
        return t("translator.businessUnderstandsEllipsis");
    }
  }

  const sourceLabel = direction === 'design-to-audience' ? t("translator.designSays") : getCategoryLabel();
  
  const getSourceText = () => {
    if (direction === 'design-to-audience') {
      return translationPair.design;
    } else {
      switch(category) {
        case 'business': return translationPair.business;
        case 'marketing': return translationPair.marketing;
        case 'development': return translationPair.development;
        case 'family': return translationPair.family;
        default: return translationPair.business;
      }
    }
  };

  const getTargetText = () => {
    if (direction === 'design-to-audience') {
      switch(category) {
        case 'business': return translationPair.business;
        case 'marketing': return translationPair.marketing;
        case 'development': return translationPair.development;
        case 'family': return translationPair.family;
        default: return translationPair.business;
      }
    } else {
      return translationPair.design;
    }
  };

  const sourceText = getSourceText();
  const targetText = getTargetText();

  return (
    <div className="max-w-2xl w-full mx-auto border-2 border-black bg-white">
      <ConfettiEffect trigger={confettiTrigger} />
      
      <div className="p-6 sm:p-8 space-y-8">
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
          <button 
            onClick={toggleDirection}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors flex items-center"
            aria-label="Toggle direction"
          >
            <ArrowUpDown className="h-5 w-5 text-black" />
          </button>
        </div>
        
        <div>
          {direction === 'design-to-audience' ? (
            <div className="flex items-center mb-4">
              <Select 
                value={category} 
                onValueChange={(value) => setCategory(value as TranslationCategory)}
              >
                <SelectTrigger className="font-mono text-xs border-2 border-black shadow-none p-0 h-auto w-1/2">
                  <span className="text-sm font-mono uppercase tracking-wider">{getCategoryLabel()}</span>
                </SelectTrigger>
                <SelectContent className="border-2 border-black">
                  <SelectItem value="business">{t("translator.businessUnderstandsEllipsis")}</SelectItem>
                  <SelectItem value="marketing">{t("translator.marketingUnderstandsEllipsis")}</SelectItem>
                  <SelectItem value="development">{t("translator.developmentUnderstandsEllipsis")}</SelectItem>
                  <SelectItem value="family">{t("translator.familyUnderstandsEllipsis")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <label htmlFor="target-text" className="block text-sm font-mono mb-4 uppercase tracking-wider">
              {t("translator.designSays")}:
            </label>
          )}
          
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
              designText={translationPair.design}
              businessText={translationPair.business}
              marketingText={translationPair.marketing}
              developmentText={translationPair.development}
              familyText={translationPair.family}
              currentCategory={category}
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
