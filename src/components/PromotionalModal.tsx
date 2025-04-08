
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
      <DialogContent className="p-0 border-none max-w-2xl" aria-describedby="promo-description">
        <DialogTitle className="sr-only">{content[language].title}</DialogTitle>
        <div className="bg-[#F8DE29] text-black border-2 border-black">
          <div className="px-4 py-6 flex flex-col items-center md:px-[24px] md:py-[24px]">
            <div className="w-full max-w-md mx-auto border-2 border-black">
              <img alt="Workbook para Diseñadores" className="w-full object-contain" src="/lovable-uploads/eef126d8-351c-41ce-82bd-fa00bdac8c46.jpg" />
            </div>
            
            <div className="text-center mt-5 md:mt-6 space-y-3 md:space-y-4">
              <h2 className="font-mono text-lg md:text-2xl font-bold">
                {content[language].title}
              </h2>
              
              <p id="promo-description" className="font-mono text-sm md:text-lg">
                {content[language].description}
              </p>
              
              <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <a href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-mono py-2 md:py-3 px-6 md:px-8 inline-block hover:bg-opacity-80 transition-colors font-bold">
                  {content[language].buttonText}
                </a>
                <button onClick={() => onOpenChange(false)} className="border-2 border-black py-2 md:py-3 px-6 md:px-8 font-mono font-bold hover:bg-black hover:text-white transition-colors">
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
