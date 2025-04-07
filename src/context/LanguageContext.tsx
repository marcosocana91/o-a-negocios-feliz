
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.manifesto": "Manifiesto",
    "nav.about": "Nosotros",
    "nav.switchDirection": "Cambiar dirección",
    
    // Translator
    "translator.title": "When design says...",
    "translator.subtitle": "Diseño y negocio. Encontrando un lenguaje común",
    "translator.designSays": "Cuando el diseño dice",
    "translator.businessUnderstands": "Negocio debería entender",
    "translator.marketingUnderstands": "Marketing debería entender",
    "translator.developmentUnderstands": "Desarrollo debería entender",
    "translator.familyUnderstands": "Tu familia debería entender",
    "translator.businessSays": "Cuando el negocio dice",
    "translator.designUnderstands": "El diseño entiende",
    "translator.translate": "Traducir",
    "translator.share": "Compartir",
    "translator.footer": "Diseño y negocio. Dos mundos, un lenguaje.",
    "translator.selectAudience": "Selecciona audiencia",
    "translator.business": "Negocio",
    "translator.marketing": "Marketing",
    "translator.development": "Desarrollo",
    "translator.family": "Familia",
    
    // Share
    "share.designSays": "Cuando el diseño dice",
    "share.businessUnderstands": "Negocio debería entender",
    "share.marketingUnderstands": "Marketing debería entender",
    "share.developmentUnderstands": "Desarrollo debería entender",
    "share.familyUnderstands": "Tu familia debería entender",
    "share.button": "Compartir",
    "share.copied": "¡Copiado al portapapeles!",
    
    // Footer
    "footer.rights": "© {year} When design says...",
    "footer.createdBy": "Creado por",
    
    // About
    "about.title": "Nosotros",
    "about.p1": "\"When design says...\" es una herramienta para cerrar la brecha de comunicación entre diseñadores y stakeholders de negocio.",
    "about.p2": "En el mundo del desarrollo de productos, los diseñadores y los profesionales de negocios a menudo hablan diferentes lenguajes. Lo que suena como una emocionante mejora de UX para un diseñador podría no resonar con stakeholders que se centran en métricas y resultados comerciales.",
    "about.p3": "Nuestro traductor ayuda a ambas partes a entenderse mejor convirtiendo la terminología de diseño al lenguaje de negocios y viceversa.",
    "about.p4": "Ya seas un diseñador tratando de argumentar tu trabajo o un profesional de negocios que quiere entender mejor las decisiones de diseño, nuestra herramienta está aquí para ayudarte a encontrar un terreno común y hablar un idioma que todos puedan entender.",
    
    // Manifesto
    "manifesto.title": "Manifiesto",
    "manifesto.p1": "El diseño y el negocio a menudo hablan idiomas diferentes, creando barreras de comunicación que disminuyen el impacto del buen diseño en los resultados empresariales.",
    "manifesto.p2": "Este traductor nace como una herramienta para tender puentes entre ambos mundos, facilitando un diálogo más fluido y productivo.",
    "manifesto.p3": "Creemos que el diseño es una disciplina estratégica que debe alinearse con los objetivos de negocio para maximizar su valor.",
    "manifesto.p4": "Nuestro objetivo es ayudar a los diseñadores a comunicar su trabajo de manera que sea valorado por stakeholders y decisores de negocio.",
    "manifesto.p5": "Al mismo tiempo, queremos ayudar a los profesionales de negocio a entender el valor estratégico que puede aportar un buen diseño.",
    "manifesto.footer": "Diseño y negocio. Dos mundos, un lenguaje."
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.manifesto": "Manifesto",
    "nav.about": "About",
    "nav.switchDirection": "Switch direction",
    
    // Translator
    "translator.title": "When design says...",
    "translator.subtitle": "Design and business. Finding a common language",
    "translator.designSays": "When design says",
    "translator.businessUnderstands": "Business should understand",
    "translator.marketingUnderstands": "Marketing should understand",
    "translator.developmentUnderstands": "Development should understand", 
    "translator.familyUnderstands": "Your family should understand",
    "translator.businessSays": "When business says",
    "translator.designUnderstands": "Design understands",
    "translator.translate": "Translate",
    "translator.share": "Share",
    "translator.footer": "Design and business. Two worlds, one language.",
    "translator.selectAudience": "Select audience",
    "translator.business": "Business",
    "translator.marketing": "Marketing",
    "translator.development": "Development", 
    "translator.family": "Family",
    
    // Share
    "share.designSays": "When design says",
    "share.businessUnderstands": "Business should understand",
    "share.marketingUnderstands": "Marketing should understand",
    "share.developmentUnderstands": "Development should understand",
    "share.familyUnderstands": "Your family should understand",
    "share.button": "Share",
    "share.copied": "Copied to clipboard!",
    
    // Footer
    "footer.rights": "© {year} When design says...",
    "footer.createdBy": "Created by",
    
    // About
    "about.title": "About",
    "about.p1": "\"When design says...\" is a tool to bridge the communication gap between designers and business stakeholders.",
    "about.p2": "In the world of product development, designers and business professionals often speak different languages. What sounds like an exciting UX improvement to a designer might not resonate with stakeholders who focus on metrics and business outcomes.",
    "about.p3": "Our translator helps both sides understand each other better by converting design terminology to business language and vice versa.",
    "about.p4": "Whether you're a designer trying to make a case for your work or a business professional wanting to better understand design decisions, our tool is here to help you find common ground and speak a language everyone can understand.",
    
    // Manifesto
    "manifesto.title": "Manifesto",
    "manifesto.p1": "Design and business often speak different languages, creating communication barriers that diminish the impact of good design on business outcomes.",
    "manifesto.p2": "This translator was born as a tool to build bridges between both worlds, facilitating more fluid and productive dialogue.",
    "manifesto.p3": "We believe that design is a strategic discipline that should be aligned with business objectives to maximize its value.",
    "manifesto.p4": "Our goal is to help designers communicate their work in a way that is valued by stakeholders and business decision-makers.",
    "manifesto.p5": "At the same time, we want to help business professionals understand the strategic value that good design can bring.",
    "manifesto.footer": "Design and business. Two worlds, one language."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    const translation = currentTranslations[key as keyof typeof currentTranslations];
    
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    if (key.includes("footer.rights")) {
      return translation.replace("{year}", new Date().getFullYear().toString());
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
