
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PromotionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PromotionalModal: React.FC<PromotionalModalProps> = ({
  open,
  onOpenChange
}) => {
  const { language } = useLanguage();
  
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
      <DialogContent className="p-0 border-none max-w-2xl">
        <div className="bg-[#F8DE29] text-black border border-black">
          <div className="flex justify-end p-2">
            <button 
              onClick={() => onOpenChange(false)} 
              className="bg-[#333] text-white p-1 rounded-full hover:bg-black"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="px-4 md:px-8 pb-8 flex flex-col items-center">
            <div className="w-full max-w-md mx-auto border border-black">
              <img 
                alt="Workbook para Diseñadores" 
                className="w-full object-contain" 
                src="/lovable-uploads/eef126d8-351c-41ce-82bd-fa00bdac8c46.jpg" 
              />
            </div>
            
            <div className="text-center mt-6 space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold">
                {content[language].title}
              </h2>
              
              <p className="font-mono text-base md:text-lg">
                {content[language].description}
              </p>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-black text-white font-mono py-3 px-8 inline-block hover:bg-opacity-80 transition-colors font-bold"
                >
                  {content[language].buttonText}
                </a>
                <button 
                  onClick={() => onOpenChange(false)} 
                  className="border border-black py-3 px-8 font-mono hover:bg-black hover:text-white transition-colors"
                >
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
