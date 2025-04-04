
export interface TranslationPair {
  design: string;
  business: string;
}

export const translationPairs: TranslationPair[] = [
  {
    design: "Necesitamos mejorar la experiencia de usuario",
    business: "Vamos a aumentar la retención y reducir el churn rate"
  },
  {
    design: "Este diseño necesita más espacio en blanco",
    business: "Esta presentación debe comunicar valor de forma más eficiente"
  },
  {
    design: "Tenemos que revisar la paleta de colores",
    business: "Necesitamos alinear mejor la identidad visual con el posicionamiento de marca"
  },
  {
    design: "Hay que simplificar el recorrido de usuario",
    business: "Debemos optimizar la tasa de conversión eliminando fricciones"
  },
  {
    design: "Este elemento debería ser más accesible",
    business: "Debemos aumentar el mercado potencial de nuestro producto"
  },
  {
    design: "Diseñé esta página con enfoque mobile-first",
    business: "He priorizado el canal donde está el 70% de nuestros usuarios"
  },
  {
    design: "Aumentemos el contraste de estos botones",
    business: "Incrementemos el CTR de nuestras llamadas a la acción"
  },
  {
    design: "Necesitamos probar distintas variantes de esta página",
    business: "Implementemos tests A/B para optimizar métricas clave"
  },
  {
    design: "Esta tipografía no transmite la personalidad correcta",
    business: "Este elemento visual no está alineado con nuestro brand positioning"
  },
  {
    design: "Deberíamos usar microcopy más amigable",
    business: "Necesitamos mejorar la percepción de marca y aumentar el engagement"
  },
  {
    design: "La jerarquía visual no está bien definida",
    business: "No estamos guiando eficientemente al usuario hacia la conversión"
  },
  {
    design: "Este componente necesita estados de hover y focus",
    business: "Necesitamos mejorar los indicadores de interactividad para aumentar el engagement"
  },
  {
    design: "Hay inconsistencias en el sistema de diseño",
    business: "Debemos optimizar recursos para escalar de forma más eficiente"
  },
  {
    design: "Faltan tooltips en elementos complejos",
    business: "Los usuarios abandonan porque no entienden ciertas funcionalidades"
  },
  {
    design: "Este flujo tiene demasiados pasos",
    business: "Tenemos una tasa de abandono del 40% en este proceso"
  }
];

export const getRandomTranslationPair = (): TranslationPair => {
  const randomIndex = Math.floor(Math.random() * translationPairs.length);
  return translationPairs[randomIndex];
};
