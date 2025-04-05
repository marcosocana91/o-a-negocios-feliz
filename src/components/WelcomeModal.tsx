
import React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WelcomeModalProps {
  onClose: () => void;
}

const modalContent = {
  es: {
    title: "¡Bienvenido al Traductor Diseño-Negocio!",
    description: "Esta herramienta traduce el lenguaje de diseño a términos de negocio que los stakeholders entienden.",
    instruction: "Haz clic en 'Traducir' para ver cómo se transforman las expresiones de diseño en lenguaje de negocio que resuena con los stakeholders.",
    closeButton: "Entendido"
  },
  en: {
    title: "Welcome to the Design-Business Translator!",
    description: "This tool translates design language into business terms that stakeholders understand.",
    instruction: "Click 'Translate' to see how design expressions transform into business language that resonates with stakeholders.",
    closeButton: "Got it"
  }
};

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const { language } = useLanguage();
  const content = modalContent[language];
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-md w-full">
        <div className="flex justify-between items-center border-b-2 border-black p-4">
          <h2 className="font-bold uppercase tracking-wide font-mono">{content.title}</h2>
          <button onClick={onClose} className="hover:bg-gray-100 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <p>{content.description}</p>
          <p>{content.instruction}</p>
          
          <div className="pt-4 flex justify-center">
            <button 
              onClick={onClose}
              className="px-8 py-2 bg-black text-white font-mono text-sm uppercase hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors"
            >
              {content.closeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
