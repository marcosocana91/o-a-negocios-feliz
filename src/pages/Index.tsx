
import React from 'react';
import Translator from '../components/Translator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
          Traductor Diseño–Negocio
        </h1>
        <p className="text-translator-text/80 max-w-md mx-auto">
          Encuentra la traducción perfecta entre lo que el diseño quiere decir y lo que el negocio entiende
        </p>
      </div>
      
      <Translator />
    </div>
  );
};

export default Index;
