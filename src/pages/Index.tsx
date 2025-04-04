
import React from 'react';
import Translator from '../components/Translator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-translator-light">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest">
          Traductor
        </h1>
        <div className="w-16 h-1 bg-translator-accent mx-auto mb-4"></div>
        <p className="text-translator-text/80 max-w-md mx-auto text-sm uppercase tracking-wide">
          Diseño y negocio. Encontremos un lenguaje común
        </p>
      </div>
      
      <Translator />
    </div>
  );
};

export default Index;
