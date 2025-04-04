
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface WelcomeModalProps {
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onClose }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-2 border-black p-0 w-full max-w-3xl bg-white shadow-none rounded-none">
        <div className="flex justify-between items-center p-4 border-b-2 border-black">
          <DialogTitle className="text-xl font-mono uppercase tracking-wider">Traductor Diseño-Negocio</DialogTitle>
          <button onClick={handleClose} className="hover:bg-black hover:text-white p-2">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-8 font-serif">
          <p className="mb-6 text-lg">
            Bienvenido al traductor diseño-negocio, una herramienta para encontrar un lenguaje común entre profesionales del diseño y del mundo empresarial.
          </p>
          <p className="mb-6 text-lg">
            ¿Alguna vez te has sentido incomprendido al comunicar el valor de tu trabajo de diseño? Este traductor convierte las expresiones típicas de los diseñadores a un lenguaje que resuena con los objetivos de negocio.
          </p>
          <p className="font-mono uppercase text-sm mt-8 text-center tracking-wider">
            Pulsa "Traducir ahora" para comenzar
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeModal;
