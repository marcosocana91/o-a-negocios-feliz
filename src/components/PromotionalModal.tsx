
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

interface PromotionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PromotionalModal: React.FC<PromotionalModalProps> = ({ open, onOpenChange }) => {
  const { language } = useLanguage();
  
  const content = {
    es: {
      title: "¡Consigue el Workbook para Diseñadores!",
      description: "Más de 100 páginas de retos y actividades para convertirte en un mejor diseñador.",
      buttonText: "MÁS INFORMACIÓN"
    },
    en: {
      title: "Get the Designer's Workbook!",
      description: "More than 100 pages of challenges and activities to become a better designer.",
      buttonText: "MORE INFORMATION"
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none max-w-2xl">
        <div className="bg-[#FEF946] text-black">
          <div className="flex justify-end p-2">
            <button
              onClick={() => onOpenChange(false)}
              className="bg-[#333] text-white p-1 rounded-full hover:bg-black"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="px-4 md:px-8 pb-8 flex flex-col items-center">
            <div className="w-full max-w-md mx-auto">
              <img 
                src="/lovable-uploads/b58afbc4-79c1-47f5-8c30-ea181d4da606.png" 
                alt="Workbook para Diseñadores"
                className="w-full object-contain"
              />
            </div>
            
            <div className="text-center mt-6 space-y-4">
              <h2 className="font-mono text-xl md:text-2xl font-bold">
                {content[language].title}
              </h2>
              
              <p className="font-mono text-base md:text-lg">
                {content[language].description}
              </p>
              
              <div className="mt-6">
                <a 
                  href="https://www.amazon.es/Workbook-para-Dise%C3%B1adores-producto-gr%C3%A1ficos/dp/B0DLTT5WNM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-mono py-3 px-8 inline-block hover:bg-opacity-80 transition-colors"
                >
                  {content[language].buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PromotionalModal;
