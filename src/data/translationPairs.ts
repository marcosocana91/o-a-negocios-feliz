
export interface TranslationPair {
  design: string;
  business: string;
}

interface TranslationData {
  es: TranslationPair[];
  en: TranslationPair[];
}

export const translationPairs: TranslationData = {
  es: [
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
    },
    {
      design: "Necesitamos un sistema de diseño cohesivo",
      business: "Debemos reducir la deuda técnica y mejorar la velocidad de implementación"
    },
    {
      design: "Esta página necesita más patrones de interacción",
      business: "Necesitamos aumentar el tiempo de permanencia y engagement en la plataforma"
    },
    {
      design: "Deberíamos añadir animaciones sutiles",
      business: "Hay que mejorar las microinteracciones para incrementar la percepción de calidad"
    },
    {
      design: "La densidad de información es excesiva",
      business: "Estamos sobrecargando cognitivamente a los usuarios y reduciendo la conversión"
    },
    {
      design: "El diseño debe ser más minimalista",
      business: "Debemos enfocar la atención del usuario en las acciones de mayor valor"
    },
    {
      design: "Los bordes son demasiado redondeados",
      business: "La imagen de marca requiere un aspecto más serio y profesional"
    },
    {
      design: "Este menú necesita mejor organización",
      business: "Estamos reduciendo el descubrimiento de funcionalidades clave"
    },
    {
      design: "Debemos hacer pruebas de usabilidad",
      business: "Necesitamos validar nuestras hipótesis de diseño con usuarios reales"
    },
    {
      design: "Este diseño no es adaptable a móvil",
      business: "Estamos perdiendo el 60% del tráfico potencial"
    },
    {
      design: "Los tiempos de carga son demasiado largos",
      business: "Cada segundo extra reduce nuestra tasa de conversión un 7%"
    },
    {
      design: "Esta tipografía no se ajusta a nuestra marca",
      business: "Este elemento no comunica correctamente los valores de la empresa"
    },
    {
      design: "Necesitamos mockups más detallados",
      business: "Requerimos visualizaciones más precisas para estimar correctamente los plazos"
    },
    {
      design: "El wireframe necesita refinamiento",
      business: "La estructura base debe optimizarse para mejorar los KPIs principales"
    },
    {
      design: "Los iconos deberían ser más consistentes",
      business: "Los elementos visuales deben reforzar la cohesión de marca para mejorar el reconocimiento"
    },
    {
      design: "El feedback visual es insuficiente",
      business: "Los usuarios necesitan confirmación clara para reducir los costos de soporte"
    }
  ],
  en: [
    {
      design: "We need to improve the user experience",
      business: "We're going to increase retention and reduce churn rate"
    },
    {
      design: "This design needs more white space",
      business: "This presentation must communicate value more efficiently"
    },
    {
      design: "We need to review the color palette",
      business: "We need to better align the visual identity with brand positioning"
    },
    {
      design: "We should simplify the user journey",
      business: "We must optimize the conversion rate by eliminating friction"
    },
    {
      design: "This element should be more accessible",
      business: "We need to increase the potential market for our product"
    },
    {
      design: "I designed this page with a mobile-first approach",
      business: "I've prioritized the channel where 70% of our users are"
    },
    {
      design: "Let's increase the contrast of these buttons",
      business: "Let's increase the CTR of our call-to-actions"
    },
    {
      design: "We need to test different variants of this page",
      business: "Let's implement A/B tests to optimize key metrics"
    },
    {
      design: "This typography doesn't convey the right personality",
      business: "This visual element isn't aligned with our brand positioning"
    },
    {
      design: "We should use more friendly microcopy",
      business: "We need to improve brand perception and increase engagement"
    },
    {
      design: "The visual hierarchy isn't well defined",
      business: "We're not efficiently guiding users toward conversion"
    },
    {
      design: "This component needs hover and focus states",
      business: "We need to improve interactivity indicators to increase engagement"
    },
    {
      design: "There are inconsistencies in the design system",
      business: "We must optimize resources to scale more efficiently"
    },
    {
      design: "Complex elements are missing tooltips",
      business: "Users are dropping off because they don't understand certain functionalities"
    },
    {
      design: "This flow has too many steps",
      business: "We have a 40% abandonment rate in this process"
    },
    {
      design: "We need a cohesive design system",
      business: "We need to reduce technical debt and improve implementation speed"
    },
    {
      design: "This page needs more interaction patterns",
      business: "We need to increase time-on-site and engagement on the platform"
    },
    {
      design: "We should add subtle animations",
      business: "We need to improve micro-interactions to increase quality perception"
    },
    {
      design: "The information density is excessive",
      business: "We're cognitively overloading users and reducing conversion"
    },
    {
      design: "The design should be more minimalist",
      business: "We need to focus user attention on high-value actions"
    },
    {
      design: "The borders are too rounded",
      business: "The brand image requires a more serious and professional look"
    },
    {
      design: "This menu needs better organization",
      business: "We're reducing the discovery of key functionalities"
    },
    {
      design: "We need to conduct usability testing",
      business: "We need to validate our design hypotheses with real users"
    },
    {
      design: "This design isn't mobile responsive",
      business: "We're losing 60% of potential traffic"
    },
    {
      design: "Loading times are too long",
      business: "Each extra second reduces our conversion rate by 7%"
    },
    {
      design: "This typography doesn't fit our brand",
      business: "This element doesn't correctly communicate the company's values"
    },
    {
      design: "We need more detailed mockups",
      business: "We require more precise visualizations to correctly estimate timelines"
    },
    {
      design: "The wireframe needs refinement",
      business: "The base structure must be optimized to improve main KPIs"
    },
    {
      design: "Icons should be more consistent",
      business: "Visual elements must reinforce brand cohesion to improve recognition"
    },
    {
      design: "Visual feedback is insufficient",
      business: "Users need clear confirmation to reduce support costs"
    }
  ]
};

export const getRandomTranslationPair = (lang: "es" | "en" = "es"): TranslationPair => {
  const pairs = translationPairs[lang];
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
};
