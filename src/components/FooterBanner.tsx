
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FooterBanner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-6 border-t-2 border-black mt-12 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 font-mono text-xs uppercase tracking-wide">
          {t("footer.rights")}
        </div>
        
        <div className="flex items-center font-mono text-xs uppercase tracking-wide">
          <span>{t("footer.createdBy")}</span>
          <a 
            href="https://www.lovable.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="ml-2 underline hover:no-underline"
          >
            Lovable
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
