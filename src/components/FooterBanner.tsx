
import React from 'react';

const FooterBanner: React.FC = () => {
  return (
    <div className="py-6 border-t-2 border-black mt-12 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 font-mono text-xs uppercase tracking-wide">
          © {new Date().getFullYear()} Traductor Diseño-Negocio
        </div>
        
        <div className="flex items-center font-mono text-xs uppercase tracking-wide">
          <span>Creado por</span>
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
