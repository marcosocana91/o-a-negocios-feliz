
import React from 'react';
import Translator from '../components/Translator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-widest border-b-2 border-black pb-4">
          Traductor
        </h1>
        <p className="text-translator-text/70 text-xs uppercase tracking-wide mb-0">
          Diseño y negocio. Encontremos un lenguaje común
        </p>
      </div>
      
      <Translator />
    </div>
  );
};

export default Index;
