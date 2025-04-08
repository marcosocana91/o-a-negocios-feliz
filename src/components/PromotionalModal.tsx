
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Dialog, 
  DialogContent,
  DialogTitle
} from "@/components/ui/dialog";
import { useIsMobile } from '../hooks/use-mobile';

interface PromotionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PromotionalModal: React.FC<PromotionalModalProps> = ({
  open,
  onOpenChange
}) => {
  const {
    language
  } = useLanguage();
  const isMobile = useIsMobile();
  const content = {
    es: {
      title: "¡Consigue el Workbook para Diseñadores!",
      description: "Más de 100 páginas de retos y actividades para convertirte en un mejor diseñador.",
      buttonText: "MÁS INFORMACIÓN",
      closeButton: "Cerrar"
    },
    en: {
      title: "Get the Designer's Workbook!",
      description: "More than 100 pages of challenges and activities to become a better designer.",
      buttonText: "MORE INFORMATION",
      closeButton: "Close"
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none max-w-xl" aria-describedby="promo-description">
        <DialogTitle className="sr-only">{content[language].title}</DialogTitle>
        <div className="bg-[#F8DE29] text-black border-2 border-black">
          <div className="px-3 py-4 flex flex-col items-center md:px-5 md:py-5">
            <div className="w-full max-w-[280px] md:max-w-sm mx-auto border-2 border-black">
              <img alt="Workbook para Diseñadores" className="w-full object-contain" src="/lovable-uploads/eef126d8-351c-41ce-82bd-fa00bdac8c46.jpg" />
            </div>
            
            <div className="text-center mt-3 md:mt-4 space-y-2 md:space-y-3">
              <h2 className="font-mono text-sm md:text-xl font-bold">
                {content[language].title}
              </h2>
              
              <p id="promo-description" className="font-mono text-xs md:text-base">
                {content[language].description}
              </p>
              
              <div className="mt-3 md:mt-4 flex flex-row gap-2 md:gap-3 justify-center items-center">
                <a href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-mono py-2 px-4 md:py-2.5 md:px-5 inline-block hover:bg-opacity-80 transition-colors text-sm md:text-base font-bold">
                  {content[language].buttonText}
                </a>
                <button onClick={() => onOpenChange(false)} className="border-2 border-black py-2 px-4 md:py-2.5 md:px-5 font-mono text-sm md:text-base font-bold hover:bg-black hover:text-white transition-colors">
                  {content[language].closeButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalModal;
