
export interface TranslationPair {
  design: string;
  business: string;
}

interface TranslationData {
  es: TranslationPair[];
  en: TranslationPair[];
}

// Function to get a random translation pair based on the current language
export const getRandomTranslationPair = (language: 'es' | 'en'): TranslationPair => {
  const pairs = translationPairs[language];
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
};

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
    },
    
    // Adding 100 more translation pairs
    {
      design: "Necesitamos una interfaz más intuitiva",
      business: "Debemos reducir la curva de aprendizaje para aumentar la adopción del producto"
    },
    {
      design: "Este color no funciona con nuestra identidad visual",
      business: "Este elemento no está alineado con nuestra estrategia de posicionamiento"
    },
    {
      design: "Hay que añadir más contrastes en la navegación",
      business: "Necesitamos mejorar la visibilidad de los caminos de conversión"
    },
    {
      design: "El espaciado entre elementos es inconsistente",
      business: "La presentación visual carece de estructura y orden percibido"
    },
    {
      design: "Necesitamos rediseñar este formulario",
      business: "Debemos optimizar este punto de captura de datos"
    },
    {
      design: "Esta animación es demasiado compleja",
      business: "Este elemento consume recursos innecesarios y aumenta el tiempo de carga"
    },
    {
      design: "Deberíamos implementar un modo oscuro",
      business: "Necesitamos adaptar nuestra plataforma a diferentes contextos de uso"
    },
    {
      design: "Esta tipografía no es legible en pantallas pequeñas",
      business: "Estamos perdiendo usuarios en dispositivos móviles por problemas de accesibilidad"
    },
    {
      design: "Falta feedback visual en los botones",
      business: "Los usuarios no tienen suficientes indicadores para completar acciones clave"
    },
    {
      design: "La navegación está sobrecargada",
      business: "Tenemos demasiados puntos de distracción que reducen la conversión"
    },
    {
      design: "Este prototipo necesita más fidelidad",
      business: "Necesitamos reducir la incertidumbre sobre el producto final"
    },
    {
      design: "Deberíamos implementar un sistema de diseño",
      business: "Necesitamos estandarizar componentes para reducir costes de desarrollo"
    },
    {
      design: "Este dashboard está sobrecargado de información",
      business: "Estamos dificultando la toma de decisiones basadas en datos"
    },
    {
      design: "Necesitamos un enfoque más minimalista",
      business: "Debemos reducir la fricción cognitiva para aumentar la retención"
    },
    {
      design: "Esta sección necesita mejor jerarquía visual",
      business: "Debemos priorizar el contenido por su impacto en los KPIs"
    },
    {
      design: "Los iconos deberían ser más consistentes",
      business: "Nuestra comunicación visual carece de coherencia"
    },
    {
      design: "Necesitamos un diseño más accesible",
      business: "Debemos cumplir con normativas y ampliar nuestro mercado potencial"
    },
    {
      design: "Este flujo tiene demasiadas interrupciones",
      business: "La tasa de abandono en este proceso es demasiado alta"
    },
    {
      design: "Necesitamos una paleta cromática más coherente",
      business: "Nuestra marca necesita mayor reconocimiento visual"
    },
    {
      design: "La arquitectura de información es confusa",
      business: "Los usuarios no encuentran el contenido de mayor valor"
    },
    {
      design: "Este elemento necesita más padding",
      business: "Este componente visual carece de aire y dificulta la asimilación de información"
    },
    {
      design: "Deberíamos usar un diseño atómico",
      business: "Necesitamos un sistema modular que escale sin multiplicar costes"
    },
    {
      design: "Las tarjetas deben tener esquinas más suaves",
      business: "Necesitamos una experiencia que transmita mayor amabilidad"
    },
    {
      design: "Los menús desplegables son demasiado complejos",
      business: "Estamos ocultando demasiado contenido y reduciendo la navegabilidad"
    },
    {
      design: "Los estados de error no son suficientemente claros",
      business: "Generamos demasiadas consultas al soporte técnico"
    },
    {
      design: "La línea base del texto está desalineada",
      business: "La presentación visual transmite desorden e imprecisión"
    },
    {
      design: "Necesitamos un prototipo de alta fidelidad",
      business: "Debemos validar la experiencia antes de invertir en desarrollo"
    },
    {
      design: "El diseño no es escalable",
      business: "No podremos mantener la coherencia cuando ampliemos funcionalidades"
    },
    {
      design: "Los elementos interactivos no son reconocibles",
      business: "La tasa de interacción con elementos clave es demasiado baja"
    },
    {
      design: "Falta consistencia visual entre las páginas",
      business: "La curva de aprendizaje del producto es demasiado pronunciada"
    },
    {
      design: "El comportamiento responsive no es adecuado",
      business: "Estamos ofreciendo una experiencia deficiente en dispositivos móviles"
    },
    {
      design: "La jerarquía tipográfica no es clara",
      business: "Los usuarios no distinguen entre información primaria y secundaria"
    },
    {
      design: "Necesitamos estados intermedios en los procesos",
      business: "Los usuarios abandonan porque no saben cuánto falta para terminar"
    },
    {
      design: "Los márgenes son inconsistentes",
      business: "La presentación visual carece de estructura y profesionalidad"
    },
    {
      design: "Las etiquetas de los botones son ambiguas",
      business: "Los usuarios dudan antes de realizar acciones clave"
    },
    {
      design: "Falta retroalimentación en este formulario",
      business: "Tenemos una alta tasa de datos incorrectos que generan costes operativos"
    },
    {
      design: "El diseño de esta página es estático",
      business: "La percepción de nuestra marca es anticuada y poco dinámica"
    },
    {
      design: "Necesitamos patrones de interacción más coherentes",
      business: "La inconsistencia reduce la retención y aumenta los costes de soporte"
    },
    {
      design: "El diseño no es inclusivo",
      business: "Estamos excluyendo segmentos de mercado potenciales"
    },
    {
      design: "El diseño no inspira confianza",
      business: "La tasa de conversión es baja por problemas de credibilidad"
    },
    {
      design: "Necesitamos más visualizaciones de datos",
      business: "Los usuarios no comprenden el valor de nuestras métricas clave"
    },
    {
      design: "Hay demasiados clicks para completar esta tarea",
      business: "El proceso tiene demasiada fricción y reduce las conversiones"
    },
    {
      design: "Este flujo no tiene un final claro",
      business: "Los usuarios no completan el ciclo de conversión"
    },
    {
      design: "La usabilidad móvil es deficiente",
      business: "Estamos perdiendo tráfico en el canal de mayor crecimiento"
    },
    {
      design: "Este diseño no es visualmente atractivo",
      business: "La primera impresión no genera suficiente interés en el producto"
    },
    {
      design: "El estilo visual es inconsistente con la marca",
      business: "Estamos diluyendo nuestra identidad y reconocimiento de marca"
    },
    {
      design: "Las transiciones entre estados no son fluidas",
      business: "La percepción de calidad del producto es baja"
    },
    {
      design: "Necesitamos mejorar el contraste para accesibilidad",
      business: "No cumplimos con normativas que podrían generar problemas legales"
    },
    {
      design: "El layout no está bien estructurado",
      business: "El recorrido visual no prioriza los elementos de mayor conversión"
    },
    {
      design: "Los elementos de navegación están mal ubicados",
      business: "Los usuarios se pierden en el flujo y no completan objetivos clave"
    },
    {
      design: "El diseño tiene demasiados puntos de decisión",
      business: "Generamos parálisis por análisis y reducimos la tasa de conversión"
    },
    {
      design: "Necesitamos diseños más modulares",
      business: "Nuestro sistema actual no permite escalar eficientemente"
    },
    {
      design: "El feedback de sistema es lento",
      business: "La percepción de rendimiento afecta la satisfacción del usuario"
    },
    {
      design: "Los elementos críticos tienen poco peso visual",
      business: "Las acciones de mayor valor no reciben suficiente atención"
    },
    {
      design: "El diseño no tiene suficiente aire",
      business: "La densidad de información reduce la capacidad de procesamiento"
    },
    {
      design: "Las animaciones son demasiado lentas",
      business: "Perdemos eficiencia operativa por tiempos de espera innecesarios"
    },
    {
      design: "El concepto visual no es coherente",
      business: "La experiencia carece de una narrativa que refuerce el posicionamiento"
    },
    {
      design: "Los tamaños de texto son demasiado pequeños",
      business: "Generamos fricciones innecesarias para segmentos clave de usuarios"
    },
    {
      design: "No hay suficiente contraste en elementos críticos",
      business: "Las llamadas a la acción no destacan lo suficiente"
    },
    {
      design: "Este layout no es flexible",
      business: "No podemos adaptarnos rápidamente a nuevos requisitos de negocio"
    },
    {
      design: "Las notificaciones son intrusivas",
      business: "Generamos irritación que aumenta la tasa de abandono"
    },
    {
      design: "Este componente es demasiado complejo",
      business: "Invertimos demasiados recursos en funcionalidades poco utilizadas"
    },
    {
      design: "Necesitamos un diseño más orientado a objetivos",
      business: "No estamos alineando la experiencia con las métricas de negocio"
    },
    {
      design: "Faltan guías visuales en este proceso",
      business: "Los usuarios necesitan más ayuda para completar acciones de valor"
    },
    {
      design: "Esta página tiene demasiados puntos de salida",
      business: "Perdemos usuarios antes de completar el embudo de conversión"
    },
    {
      design: "La estructura del contenido es confusa",
      business: "El mensaje no se comunica con claridad y pierde impacto"
    },
    {
      design: "El diseño no es coherente entre plataformas",
      business: "La experiencia fragmentada reduce la percepción de calidad"
    },
    {
      design: "Falta una vista previa en este proceso",
      business: "Los usuarios necesitan validación antes de completar acciones importantes"
    },
    {
      design: "Este formulario no tiene validación en tiempo real",
      business: "Generamos frustración y abandonos por errores evitables"
    },
    {
      design: "El diseño no comunica jerarquía de información",
      business: "Los usuarios no pueden identificar rápidamente lo más importante"
    },
    {
      design: "No hay suficiente diferenciación en los niveles de suscripción",
      business: "No estamos comunicando el valor diferencial de los planes premium"
    },
    {
      design: "Las animaciones no aportan significado",
      business: "Invertimos recursos en elementos que no mejoran la experiencia"
    },
    {
      design: "Faltan indicadores de progreso",
      business: "Los usuarios abandonan procesos porque desconocen su duración"
    },
    {
      design: "Este diseño no es sostenible",
      business: "No podremos mantener la calidad a medida que escalemos"
    },
    {
      design: "Los elementos interactivos no tienen estados consistentes",
      business: "Generamos confusión que aumenta los costes de soporte"
    },
    {
      design: "La página de inicio no comunica propuesta de valor",
      business: "La tasa de rebote es demasiado alta por falta de claridad"
    },
    {
      design: "Este prototipo carece de detalles importantes",
      business: "No podemos estimar adecuadamente los costos de implementación"
    },
    {
      design: "La terminología no es consistente",
      business: "Generamos confusión que reduce la confianza en el producto"
    },
    {
      design: "El diseño no considera casos extremos",
      business: "Tenemos demasiados errores en escenarios poco comunes"
    },
    {
      design: "El diseño no respeta la ley de Fitts",
      business: "La eficiencia de interacción es baja y genera frustración"
    },
    {
      design: "Esta página tiene demasiadas distracciones",
      business: "El foco de atención no está en los elementos de mayor conversión"
    },
    {
      design: "Las tarjetas no comunican suficiente información",
      business: "Los usuarios necesitan más clicks para tomar decisiones"
    },
    {
      design: "El diseño no tiene suficiente personalidad",
      business: "No nos diferenciamos visualmente de la competencia"
    },
    {
      design: "Los estados de carga no son informativos",
      business: "Generamos incertidumbre que aumenta la tasa de abandono"
    },
    {
      design: "Las transiciones de página son abruptas",
      business: "La experiencia carece de continuidad y fluidez"
    },
    {
      design: "No hay suficientes puntos de descanso visual",
      business: "Generamos fatiga cognitiva que reduce el tiempo de sesión"
    },
    {
      design: "El diseño no usa apropiadamente el espacio disponible",
      business: "No priorizamos visualmente el contenido de mayor valor"
    },
    {
      design: "El diseño carece de ritmo visual",
      business: "La experiencia no genera suficiente engagement"
    },
    {
      design: "No hay suficientes atajos para usuarios avanzados",
      business: "Estamos frustrando a nuestros usuarios más valiosos"
    },
    {
      design: "Los elementos funcionales y decorativos no están balanceados",
      business: "El diseño no encuentra equilibrio entre utilidad y atractivo"
    },
    {
      design: "Las interacciones gestuales no son intuitivas",
      business: "Los usuarios móviles tienen dificultades para navegar"
    },
    {
      design: "El diseño no respeta los patrones mentales del usuario",
      business: "Generamos una curva de aprendizaje innecesariamente elevada"
    },
    {
      design: "No hay suficiente continuidad visual",
      business: "La experiencia se percibe como fragmentada y poco profesional"
    },
    {
      design: "Los elementos visuales no refuerzan la marca",
      business: "Perdemos oportunidades de fortalecer nuestro posicionamiento"
    },
    {
      design: "Este diseño no refleja las necesidades del usuario",
      business: "No estamos resolviendo los problemas de mayor valor para el cliente"
    },
    {
      design: "El sistema de navegación es redundante",
      business: "Estamos complicando innecesariamente la experiencia"
    },
    {
      design: "Los gráficos no comunican los datos correctamente",
      business: "Las visualizaciones no generan insights accionables"
    },
    {
      design: "El diseño no tiene suficiente flexibilidad",
      business: "No podemos adaptarnos rápidamente a cambios en la estrategia"
    },
    {
      design: "Faltan tooltips explicativos",
      business: "Los usuarios no entienden completamente las funcionalidades"
    },
    {
      design: "Los elementos decorativos distraen demasiado",
      business: "El diseño prioriza la estética sobre la funcionalidad"
    },
    {
      design: "El diseño no se ajusta a los estándares de la plataforma",
      business: "Generamos disonancia cognitiva en los usuarios"
    },
    {
      design: "No hay suficiente espacio para contenido dinámico",
      business: "El sistema no escala adecuadamente con el crecimiento"
    },
    {
      design: "Este componente necesita mejor documentación",
      business: "El equipo de desarrollo invierte demasiado tiempo en implementación"
    },
    {
      design: "La estructura visual no refleja la estructura lógica",
      business: "Generamos un modelo mental incongruente con la realidad"
    },
    {
      design: "Faltan indicadores de cambio de estado",
      business: "Los usuarios no perciben cuando sus acciones tienen efecto"
    },
    {
      design: "El diseño no refleja la personalidad de marca",
      business: "La experiencia no transmite adecuadamente nuestros valores"
    },
    {
      design: "Este proceso carece de guías visuales",
      business: "Los usuarios necesitan más ayuda para completar acciones de valor"
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
    },
    
    // Adding 100 more translation pairs
    {
      design: "We need a more intuitive interface",
      business: "We need to reduce the learning curve to increase product adoption"
    },
    {
      design: "This color doesn't work with our visual identity",
      business: "This element isn't aligned with our positioning strategy"
    },
    {
      design: "We need to add more contrast to the navigation",
      business: "We need to improve the visibility of conversion paths"
    },
    {
      design: "The spacing between elements is inconsistent",
      business: "The visual presentation lacks structure and perceived order"
    },
    {
      design: "We need to redesign this form",
      business: "We need to optimize this data capture point"
    },
    {
      design: "This animation is too complex",
      business: "This element consumes unnecessary resources and increases loading time"
    },
    {
      design: "We should implement a dark mode",
      business: "We need to adapt our platform to different usage contexts"
    },
    {
      design: "This typography isn't legible on small screens",
      business: "We're losing mobile users due to accessibility issues"
    },
    {
      design: "The buttons lack visual feedback",
      business: "Users don't have sufficient indicators to complete key actions"
    },
    {
      design: "The navigation is overloaded",
      business: "We have too many distraction points that reduce conversion"
    },
    {
      design: "This prototype needs more fidelity",
      business: "We need to reduce uncertainty about the final product"
    },
    {
      design: "We should implement a design system",
      business: "We need to standardize components to reduce development costs"
    },
    {
      design: "This dashboard is overloaded with information",
      business: "We're making data-driven decision-making difficult"
    },
    {
      design: "We need a more minimalist approach",
      business: "We need to reduce cognitive friction to increase retention"
    },
    {
      design: "This section needs better visual hierarchy",
      business: "We need to prioritize content by its impact on KPIs"
    },
    {
      design: "Icons should be more consistent",
      business: "Our visual communication lacks coherence"
    },
    {
      design: "We need a more accessible design",
      business: "We must comply with regulations and expand our potential market"
    },
    {
      design: "This flow has too many interruptions",
      business: "The abandonment rate in this process is too high"
    },
    {
      design: "We need a more coherent color palette",
      business: "Our brand needs greater visual recognition"
    },
    {
      design: "The information architecture is confusing",
      business: "Users can't find the highest-value content"
    },
    {
      design: "This element needs more padding",
      business: "This visual component lacks breathing room and makes information assimilation difficult"
    },
    {
      design: "We should use atomic design",
      business: "We need a modular system that scales without multiplying costs"
    },
    {
      design: "Cards should have softer corners",
      business: "We need an experience that conveys more friendliness"
    },
    {
      design: "Dropdown menus are too complex",
      business: "We're hiding too much content and reducing navigability"
    },
    {
      design: "Error states aren't clear enough",
      business: "We're generating too many technical support inquiries"
    },
    {
      design: "The text baseline is misaligned",
      business: "The visual presentation conveys disorder and imprecision"
    },
    {
      design: "We need a high-fidelity prototype",
      business: "We need to validate the experience before investing in development"
    },
    {
      design: "The design isn't scalable",
      business: "We won't be able to maintain consistency when we expand features"
    },
    {
      design: "Interactive elements aren't recognizable",
      business: "The interaction rate with key elements is too low"
    },
    {
      design: "There's a lack of visual consistency between pages",
      business: "The product's learning curve is too steep"
    },
    {
      design: "The responsive behavior isn't adequate",
      business: "We're offering a poor experience on mobile devices"
    },
    {
      design: "The typographic hierarchy isn't clear",
      business: "Users can't distinguish between primary and secondary information"
    },
    {
      design: "We need intermediate states in processes",
      business: "Users abandon because they don't know how much is left to finish"
    },
    {
      design: "Margins are inconsistent",
      business: "The visual presentation lacks structure and professionalism"
    },
    {
      design: "Button labels are ambiguous",
      business: "Users hesitate before performing key actions"
    },
    {
      design: "This form lacks feedback",
      business: "We have a high rate of incorrect data that generates operational costs"
    },
    {
      design: "This page design is static",
      business: "Our brand perception is outdated and not dynamic"
    },
    {
      design: "We need more coherent interaction patterns",
      business: "Inconsistency reduces retention and increases support costs"
    },
    {
      design: "The design isn't inclusive",
      business: "We're excluding potential market segments"
    },
    {
      design: "The design doesn't inspire confidence",
      business: "The conversion rate is low due to credibility issues"
    },
    {
      design: "We need more data visualizations",
      business: "Users don't understand the value of our key metrics"
    },
    {
      design: "There are too many clicks to complete this task",
      business: "The process has too much friction and reduces conversions"
    },
    {
      design: "This flow doesn't have a clear ending",
      business: "Users don't complete the conversion cycle"
    },
    {
      design: "Mobile usability is poor",
      business: "We're losing traffic in the highest-growth channel"
    },
    {
      design: "This design isn't visually appealing",
      business: "The first impression doesn't generate enough interest in the product"
    },
    {
      design: "The visual style is inconsistent with the brand",
      business: "We're diluting our identity and brand recognition"
    },
    {
      design: "Transitions between states aren't smooth",
      business: "The perception of product quality is low"
    },
    {
      design: "We need to improve contrast for accessibility",
      business: "We don't comply with regulations that could create legal issues"
    },
    {
      design: "The layout isn't well structured",
      business: "The visual journey doesn't prioritize the highest-converting elements"
    },
    {
      design: "Navigation elements are poorly positioned",
      business: "Users get lost in the flow and don't complete key objectives"
    },
    {
      design: "The design has too many decision points",
      business: "We're creating analysis paralysis and reducing the conversion rate"
    },
    {
      design: "We need more modular designs",
      business: "Our current system doesn't allow efficient scaling"
    },
    {
      design: "System feedback is slow",
      business: "The perception of performance affects user satisfaction"
    },
    {
      design: "Critical elements have too little visual weight",
      business: "Highest-value actions don't receive enough attention"
    },
    {
      design: "The design doesn't have enough breathing room",
      business: "Information density reduces processing capacity"
    },
    {
      design: "Animations are too slow",
      business: "We lose operational efficiency due to unnecessary waiting times"
    },
    {
      design: "The visual concept isn't coherent",
      business: "The experience lacks a narrative that reinforces positioning"
    },
    {
      design: "Text sizes are too small",
      business: "We create unnecessary friction for key user segments"
    },
    {
      design: "There's not enough contrast in critical elements",
      business: "Calls to action don't stand out enough"
    },
    {
      design: "This layout isn't flexible",
      business: "We can't adapt quickly to new business requirements"
    },
    {
      design: "Notifications are intrusive",
      business: "We generate irritation that increases the abandonment rate"
    },
    {
      design: "This component is too complex",
      business: "We invest too many resources in little-used features"
    },
    {
      design: "We need a more goal-oriented design",
      business: "We're not aligning the experience with business metrics"
    },
    {
      design: "This process lacks visual guides",
      business: "Users need more help to complete valuable actions"
    }
  ]
};
