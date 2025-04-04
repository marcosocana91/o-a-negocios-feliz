
import React from 'react';
import FooterBanner from '../components/FooterBanner';

const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest border-b-2 border-black pb-4">
          Manifiesto
        </h1>
        
        <div className="font-serif text-lg space-y-6">
          <p>
            El diseño y el negocio a menudo hablan idiomas diferentes, creando barreras de comunicación que disminuyen el impacto del buen diseño en los resultados empresariales.
          </p>
          
          <p>
            Este traductor nace como una herramienta para tender puentes entre ambos mundos, facilitando un diálogo más fluido y productivo.
          </p>
          
          <p>
            Creemos que el diseño es una disciplina estratégica que debe alinearse con los objetivos de negocio para maximizar su valor.
          </p>
          
          <p>
            Nuestro objetivo es ayudar a los diseñadores a comunicar su trabajo de manera que sea valorado por stakeholders y decisores de negocio.
          </p>
          
          <p>
            Al mismo tiempo, queremos ayudar a los profesionales de negocio a entender el valor estratégico que puede aportar un buen diseño.
          </p>
          
          <p className="border-t-2 border-black pt-6 mt-8 font-mono uppercase text-sm tracking-wider text-center">
            Diseño y negocio. Dos mundos, un lenguaje.
          </p>
        </div>
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Manifesto;
