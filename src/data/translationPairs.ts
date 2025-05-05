
export interface TranslationPair {
  design: string;
  business: string;
}

export type TranslationCategory = 'business';

interface TranslationData {
  es: TranslationPair[];
  en: TranslationPair[];
}

export const translationPairs: TranslationData = {
  es: [
    {
      design: "El layout no MEW responsive.",
      business: "Estás dejando fuera medio internet, colega."
    },
    {
      design: "El formulario tiene demasiados campos.",
      business: "Si pides hasta el grupo sanguíneo, nadie se registra."
    },
    {
      design: "No hay jerarquía visual clara.",
      business: "El usuario está más perdido que tú en una reunión de diseño."
    },
    {
      design: "La interfaz es demasiado minimalista.",
      business: "Tan simple que el usuario no sabe ni qué hace tu producto."
    },
    {
      design: "Los colores no siguen la marca.",
      business: "Parece una web de hace 15 años. Y no, eso no es vintage."
    },
    {
      design: "Necesitamos espacio en blanco.",
      business: "Sin aire, esto asfixia al usuario (y tus ventas)."
    },
    {
      design: "El botón no parece clicable.",
      business: "La gente no compra lo que no sabe usar."
    },
    {
      design: "Falta consistencia en los componentes.",
      business: "Cada pantalla parece de una empresa distinta. Mala señal."
    },
    {
      design: "El usuario no entiende el flujo.",
      business: "Estás perdiendo pasta por culpa de la confusión."
    },
    {
      design: "No hay feedback visual en las interacciones.",
      business: "El usuario cree que no ha pasado nada. Spoiler: se va."
    },
    {
      design: "Necesitamos validar con usuarios.",
      business: "Evitemos invertir en algo que luego nadie use."
    },
    {
      design: "El flujo no es intuitivo.",
      business: "La gente se va a perder y abandonar el proceso."
    },
    {
      design: "Eso genera fricción.",
      business: "Menos gente va a convertir."
    },
    {
      design: "Ese patrón está desfasado.",
      business: "Si lanzamos eso, pareceremos anticuados."
    },
    {
      design: "Hay que priorizar la accesibilidad.",
      business: "Si no, podríamos tener problemas legales o perder usuarios."
    },
    {
      design: "El diseño actual no escala bien.",
      business: "Futuros cambios serán muy caros."
    },
    {
      design: "Ese componente no es responsive.",
      business: "En móvil se verá mal y perderemos usuarios."
    },
    {
      design: "Eso rompe la consistencia.",
      business: "La marca y la confianza del usuario se verán afectadas."
    },
    {
      design: "Necesitamos hacer un test A/B.",
      business: "Queremos elegir lo que da más beneficio."
    },
    {
      design: "El usuario necesita feedback inmediato.",
      business: "Si no, pensará que la app no funciona."
    },
    {
      design: "Hay que reducir la carga cognitiva.",
      business: "Si no, los usuarios se frustrarán y se irán."
    },
    {
      design: "El microcopy no es claro.",
      business: "El cliente no sabrá qué hacer."
    },
    {
      design: "No tiene affordance suficiente.",
      business: "No se entiende que es clicable."
    },
    {
      design: "El contraste no cumple estándares.",
      business: "Algunos usuarios no podrán leer bien."
    },
    {
      design: "Este CTA no destaca.",
      business: "La gente no sabrá dónde hacer clic."
    },
    {
      design: "El flujo tiene demasiados pasos.",
      business: "Cada paso extra reduce conversiones."
    },
    {
      design: "El onboarding es muy largo.",
      business: "El 50% abandonará antes de empezar."
    },
    {
      design: "Hay que incluir estados vacíos.",
      business: "Sin ellos, pensarán que algo está roto."
    },
    {
      design: "Faltan animaciones de transición.",
      business: "La experiencia parecerá poco profesional."
    },
    {
      design: "Ese diseño no tiene jerarquía visual.",
      business: "El usuario no sabrá qué es importante."
    },
    {
      design: "Necesitamos personalización.",
      business: "Aumentemos la relevancia para cada cliente."
    },
    {
      design: "Faltan patrones de interacción reconocibles.",
      business: "La gente no sabrá cómo usarlo sin pensar."
    },
    {
      design: "El contenido no es escaneable.",
      business: "Nadie lo leerá."
    },
    {
      design: "Esa solución no es escalable.",
      business: "Esto va a salir caro a medio plazo."
    },
    {
      design: "Hay que usar diseño centrado en el usuario.",
      business: "Aseguremos que alguien va a usar esto."
    },
    {
      design: "El flujo no tiene retroalimentación.",
      business: "El cliente no sabrá si su acción funcionó."
    },
    {
      design: "Ese componente es inconsistente.",
      business: "Generará dudas y errores."
    },
    {
      design: "El diseño no respeta principios heurísticos.",
      business: "Habrá más errores y quejas."
    },
    {
      design: "Hay que iterar rápido.",
      business: "Fallemos barato y mejoremos rápido."
    },
    {
      design: "El diseño genera ansiedad al usuario.",
      business: "Reducirá el tiempo de uso o las ventas."
    },
    {
      design: "Eso no es mobile-first.",
      business: "En móvil perderemos usuarios."
    },
    {
      design: "El producto tiene una curva de aprendizaje alta.",
      business: "El cliente se irá a la competencia."
    },
    {
      design: "Faltan puntos de control UX.",
      business: "No sabemos si el usuario entiende lo que pasa."
    },
    {
      design: "La propuesta de valor no es clara.",
      business: "No sabrán por qué usar el producto."
    },
    {
      design: "Necesitamos un Design System.",
      business: "Reduciremos costes y tiempos de desarrollo."
    },
    {
      design: "Hay deuda de diseño.",
      business: "Esto va a salir caro luego."
    },
    {
      design: "La navegación no es discoverable.",
      business: "La gente no encontrará funciones clave."
    },
    {
      design: "El tono de la interfaz es inconsistente.",
      business: "La marca parecerá poco fiable."
    },
    {
      design: "El layout no guía al usuario.",
      business: "No sabrán qué hacer."
    },
    {
      design: "La microinteracción es clave.",
      business: "Hará que la experiencia sea recordada."
    },
    {
      design: "Ese color no tiene suficiente contraste.",
      business: "Algunos usuarios no lo verán bien."
    },
    {
      design: "Eso rompe la progresión natural.",
      business: "La gente se perderá."
    },
    {
      design: "La arquitectura de información no es óptima.",
      business: "No encontrarán lo que buscan."
    },
    {
      design: "Necesitamos simplificar.",
      business: "Lo complicado no vende."
    },
    {
      design: "El formulario es demasiado largo.",
      business: "Vamos a perder leads."
    },
    {
      design: "El feedback visual es insuficiente.",
      business: "El usuario no sabrá si todo va bien."
    },
    {
      design: "Eso no sigue el flujo mental del usuario.",
      business: "Generará errores y frustración."
    },
    {
      design: "No hay empatía en ese diseño.",
      business: "Parece que no nos importan los usuarios."
    },
    {
      design: "No cumple expectativas del usuario.",
      business: "La satisfacción y el NPS bajarán."
    },
    {
      design: "El contenido no tiene tono conversacional.",
      business: "Parece un robot."
    },
    {
      design: "La animación es demasiado lenta.",
      business: "Va a desesperar a los usuarios."
    },
    {
      design: "Falta contenido orientado a conversión.",
      business: "No vamos a vender."
    },
    {
      design: "La landing no tiene foco.",
      business: "No sabemos qué acción queremos que hagan."
    },
    {
      design: "El call-to-action es ambiguo.",
      business: "No sabrán qué pasa si hacen clic."
    },
    {
      design: "Ese flujo tiene puntos de fuga.",
      business: "Perderemos usuarios."
    },
    {
      design: "La interacción no es predecible.",
      business: "Generará errores."
    },
    {
      design: "El contenido es demasiado técnico.",
      business: "El usuario medio no lo entenderá."
    },
    {
      design: "El copy no resuelve objeciones.",
      business: "Dudarán y no comprarán."
    },
    {
      design: "La página carga muy lenta.",
      business: "Perderemos tráfico y posicionamiento."
    },
    {
      design: "No está optimizado para SEO.",
      business: "No captaremos tráfico orgánico."
    },
    {
      design: "El icono no es reconocible.",
      business: "La gente no sabrá qué significa."
    },
    {
      design: "La usabilidad es baja.",
      business: "Nadie sabrá usar esto sin ayuda."
    },
    {
      design: "Falta consistencia en los espacios.",
      business: "Parece poco profesional."
    },
    {
      design: "El sistema no tiene accesos rápidos.",
      business: "Usuarios expertos perderán tiempo."
    },
    {
      design: "Eso no escala bien en dispositivos.",
      business: "En tablets y móviles fallará."
    },
    {
      design: "El feedback de error es pobre.",
      business: "El usuario no sabrá cómo arreglarlo."
    },
    {
      design: "Hay sobrecarga de opciones.",
      business: "Los usuarios se bloquearán."
    },
    {
      design: "El diseño no considera edge cases.",
      business: "Si algo raro pasa, fallará."
    },
    {
      design: "La navegación secundaria está oculta.",
      business: "No encontrarán funciones clave."
    },
    {
      design: "Faltan pruebas de usabilidad.",
      business: "No sabemos si esto funciona."
    },
    {
      design: "El diseño es demasiado genérico.",
      business: "No transmite diferenciación."
    },
    {
      design: "El flujo no fomenta el reuso.",
      business: "Perdemos eficiencia."
    },
    {
      design: "El visual no refuerza la marca.",
      business: "Parece un producto sin personalidad."
    },
    {
      design: "El scroll infinito no está bien gestionado.",
      business: "Puede romper la navegación."
    },
    {
      design: "Las métricas de interacción son bajas.",
      business: "No estamos reteniendo usuarios."
    },
    {
      design: "El layout no respeta patrones de lectura.",
      business: "El contenido no se consume bien."
    },
    {
      design: "Hay elementos que parecen publicidad.",
      business: "La gente los ignorará."
    },
    {
      design: "El formulario no gestiona bien errores.",
      business: "No se completarán leads."
    },
    {
      design: "Los botones están demasiado juntos.",
      business: "Provocarán clics erróneos."
    },
    {
      design: "Falta confirmación de acciones críticas.",
      business: "Podemos tener errores graves."
    },
    {
      design: "El diseño no fomenta el engagement.",
      business: "La gente usará menos el producto."
    },
    {
      design: "El flujo no es flexible.",
      business: "Usuarios con necesidades distintas tendrán problemas."
    },
    {
      design: "El copy no es inclusivo.",
      business: "Podemos perder segmentos de audiencia."
    },
    {
      design: "El tono es demasiado formal.",
      business: "Parece poco amigable."
    },
    {
      design: "Falta onboarding progresivo.",
      business: "Usuarios nuevos se sentirán abrumados."
    },
    {
      design: "El dashboard no prioriza información clave.",
      business: "Los usuarios no verán lo importante."
    },
    {
      design: "El sistema no gestiona bien la carga de datos.",
      business: "Se ralentizará con muchos usuarios."
    },
    {
      design: "El diseño no guía al éxito.",
      business: "La gente abandonará antes de lograr su objetivo."
    },
    {
      design: "Falta una estrategia omnicanal.",
      business: "No habrá continuidad entre web, app y otros canales."
    },
    {
      design: "El sistema no tiene fallback para errores.",
      business: "Cuando algo falle, el usuario quedará bloqueado."
    },
    {
      design: "El diseño no fomenta la confianza.",
      business: "La conversión y la retención caerán."
    },
    {
      design: "No hemos considerado escenarios límite.",
      business: "Si algo raro pasa, tendremos problemas serios."
    }
  ],
  en: [
    {
      design: "The layout is not responsive.",
      business: "You're leaving out half the internet, buddy."
    },
    {
      design: "The form has too many fields.",
      business: "If you ask for their blood type, nobody will register."
    },
    {
      design: "There's no clear visual hierarchy.",
      business: "The user is more lost than you in a design meeting."
    },
    {
      design: "The interface is too minimalist.",
      business: "So simple that users don't even know what your product does."
    },
    {
      design: "The colors don't follow the brand.",
      business: "It looks like a website from 15 years ago. And no, that's not vintage."
    },
    {
      design: "We need white space.",
      business: "Without breathing room, this suffocates users (and your sales)."
    },
    {
      design: "The button doesn't look clickable.",
      business: "People don't buy what they don't know how to use."
    },
    {
      design: "There's no consistency in components.",
      business: "Each screen looks like it's from a different company. Bad sign."
    },
    {
      design: "The user doesn't understand the flow.",
      business: "You're losing money because of confusion."
    },
    {
      design: "There's no visual feedback on interactions.",
      business: "The user thinks nothing happened. Spoiler: they leave."
    },
    {
      design: "We need to validate with users.",
      business: "Let's avoid investing in something nobody will use."
    },
    {
      design: "The flow isn't intuitive.",
      business: "People will get lost and abandon the process."
    },
    {
      design: "That creates friction.",
      business: "Fewer people will convert."
    },
    {
      design: "That pattern is outdated.",
      business: "If we launch that, we'll look outdated."
    },
    {
      design: "We need to prioritize accessibility.",
      business: "Otherwise, we could have legal issues or lose users."
    },
    {
      design: "The current design doesn't scale well.",
      business: "Future changes will be very expensive."
    },
    {
      design: "That component isn't responsive.",
      business: "It will look bad on mobile and we'll lose users."
    },
    {
      design: "That breaks consistency.",
      business: "Brand and user trust will be affected."
    },
    {
      design: "We need to do an A/B test.",
      business: "We want to choose what gives the most benefit."
    },
    {
      design: "The user needs immediate feedback.",
      business: "Otherwise, they'll think the app doesn't work."
    },
    {
      design: "We need to reduce cognitive load.",
      business: "Otherwise, users will get frustrated and leave."
    },
    {
      design: "The microcopy isn't clear.",
      business: "The customer won't know what to do."
    },
    {
      design: "It doesn't have enough affordance.",
      business: "It's not obvious that it's clickable."
    },
    {
      design: "The contrast doesn't meet standards.",
      business: "Some users won't be able to read well."
    },
    {
      design: "This CTA doesn't stand out.",
      business: "People won't know where to click."
    },
    {
      design: "The flow has too many steps.",
      business: "Each extra step reduces conversions."
    },
    {
      design: "The onboarding is too long.",
      business: "50% will abandon before starting."
    },
    {
      design: "We need to include empty states.",
      business: "Without them, they'll think something is broken."
    },
    {
      design: "Transition animations are missing.",
      business: "The experience will seem unprofessional."
    },
    {
      design: "That design has no visual hierarchy.",
      business: "The user won't know what's important."
    },
    {
      design: "We need personalization.",
      business: "Let's increase relevance for each customer."
    },
    {
      design: "Recognizable interaction patterns are missing.",
      business: "People won't know how to use it without thinking."
    },
    {
      design: "The content isn't scannable.",
      business: "Nobody will read it."
    },
    {
      design: "That solution isn't scalable.",
      business: "This will be expensive in the mid-term."
    },
    {
      design: "We need to use user-centered design.",
      business: "Let's ensure someone will use this."
    },
    {
      design: "The flow has no feedback.",
      business: "The customer won't know if their action worked."
    },
    {
      design: "That component is inconsistent.",
      business: "It will create doubts and errors."
    },
    {
      design: "The design doesn't respect heuristic principles.",
      business: "There will be more errors and complaints."
    },
    {
      design: "We need to iterate quickly.",
      business: "Let's fail cheaply and improve fast."
    },
    {
      design: "The design creates anxiety for the user.",
      business: "It will reduce usage time or sales."
    },
    {
      design: "That's not mobile-first.",
      business: "We'll lose users on mobile."
    },
    {
      design: "The product has a high learning curve.",
      business: "The customer will go to the competition."
    },
    {
      design: "UX control points are missing.",
      business: "We don't know if the user understands what's happening."
    },
    {
      design: "The value proposition isn't clear.",
      business: "They won't know why to use the product."
    },
    {
      design: "We need a Design System.",
      business: "We'll reduce costs and development times."
    },
    {
      design: "There's design debt.",
      business: "This will be expensive later."
    },
    {
      design: "The navigation isn't discoverable.",
      business: "People won't find key functions."
    },
    {
      design: "The interface tone is inconsistent.",
      business: "The brand will seem unreliable."
    },
    {
      design: "The layout doesn't guide the user.",
      business: "They won't know what to do."
    },
    {
      design: "Microinteraction is key.",
      business: "It will make the experience memorable."
    },
    {
      design: "That color doesn't have enough contrast.",
      business: "Some users won't see it well."
    },
    {
      design: "That breaks the natural progression.",
      business: "People will get lost."
    },
    {
      design: "The information architecture isn't optimal.",
      business: "They won't find what they're looking for."
    },
    {
      design: "We need to simplify.",
      business: "Complicated things don't sell."
    },
    {
      design: "The form is too long.",
      business: "We're going to lose leads."
    },
    {
      design: "The visual feedback is insufficient.",
      business: "The user won't know if everything is going well."
    },
    {
      design: "That doesn't follow the user's mental flow.",
      business: "It will generate errors and frustration."
    },
    {
      design: "There's no empathy in that design.",
      business: "It seems like we don't care about users."
    },
    {
      design: "It doesn't meet user expectations.",
      business: "Satisfaction and NPS will drop."
    },
    {
      design: "The content doesn't have a conversational tone.",
      business: "It sounds like a robot."
    },
    {
      design: "The animation is too slow.",
      business: "It will frustrate users."
    },
    {
      design: "Conversion-oriented content is missing.",
      business: "We're not going to sell."
    },
    {
      design: "The landing doesn't have focus.",
      business: "We don't know what action we want them to take."
    },
    {
      design: "The call-to-action is ambiguous.",
      business: "They won't know what happens if they click."
    },
    {
      design: "That flow has exit points.",
      business: "We'll lose users."
    },
    {
      design: "The interaction isn't predictable.",
      business: "It will generate errors."
    },
    {
      design: "The content is too technical.",
      business: "The average user won't understand it."
    },
    {
      design: "The copy doesn't address objections.",
      business: "They'll doubt and won't buy."
    },
    {
      design: "The page loads very slowly.",
      business: "We'll lose traffic and positioning."
    },
    {
      design: "It's not optimized for SEO.",
      business: "We won't capture organic traffic."
    },
    {
      design: "The icon isn't recognizable.",
      business: "People won't know what it means."
    },
    {
      design: "The usability is low.",
      business: "Nobody will know how to use this without help."
    },
    {
      design: "There's a lack of consistency in spacing.",
      business: "It looks unprofessional."
    },
    {
      design: "The system doesn't have shortcuts.",
      business: "Expert users will waste time."
    },
    {
      design: "That doesn't scale well on devices.",
      business: "It will fail on tablets and mobile."
    },
    {
      design: "The error feedback is poor.",
      business: "The user won't know how to fix it."
    },
    {
      design: "There's an overload of options.",
      business: "Users will get blocked."
    },
    {
      design: "The design doesn't consider edge cases.",
      business: "If something unusual happens, it will fail."
    },
    {
      design: "The secondary navigation is hidden.",
      business: "They won't find key functions."
    },
    {
      design: "Usability tests are missing.",
      business: "We don't know if this works."
    },
    {
      design: "The design is too generic.",
      business: "It doesn't convey differentiation."
    },
    {
      design: "The flow doesn't encourage reuse.",
      business: "We're losing efficiency."
    },
    {
      design: "The visual doesn't reinforce the brand.",
      business: "It looks like a product without personality."
    },
    {
      design: "The infinite scroll isn't well managed.",
      business: "It can break navigation."
    },
    {
      design: "Interaction metrics are low.",
      business: "We're not retaining users."
    },
    {
      design: "The layout doesn't respect reading patterns.",
      business: "The content isn't consumed well."
    },
    {
      design: "There are elements that look like ads.",
      business: "People will ignore them."
    },
    {
      design: "The form doesn't handle errors well.",
      business: "Leads won't be completed."
    },
    {
      design: "The buttons are too close together.",
      business: "They'll cause clicking errors."
    },
    {
      design: "Confirmation of critical actions is missing.",
      business: "We can have serious errors."
    },
    {
      design: "The design doesn't encourage engagement.",
      business: "People will use the product less."
    },
    {
      design: "The flow isn't flexible.",
      business: "Users with different needs will have problems."
    },
    {
      design: "The copy isn't inclusive.",
      business: "We may lose audience segments."
    },
    {
      design: "The tone is too formal.",
      business: "It seems unfriendly."
    },
    {
      design: "Progressive onboarding is missing.",
      business: "New users will feel overwhelmed."
    },
    {
      design: "The dashboard doesn't prioritize key information.",
      business: "Users won't see what's important."
    },
    {
      design: "The system doesn't handle data loading well.",
      business: "It will slow down with many users."
    },
    {
      design: "The design doesn't guide to success.",
      business: "People will abandon before achieving their goal."
    },
    {
      design: "An omnichannel strategy is missing.",
      business: "There won't be continuity between web, app, and other channels."
    },
    {
      design: "The system doesn't have fallback for errors.",
      business: "When something fails, the user will be blocked."
    },
    {
      design: "The design doesn't promote trust.",
      business: "Conversion and retention will fall."
    },
    {
      design: "We haven't considered edge scenarios.",
      business: "If something unusual happens, we'll have serious problems."
    }
  ]
};

/**
 * Get a random translation pair that includes translations for design and business
 */
export const getTranslationByCategory = (language: 'es' | 'en', category: TranslationCategory): TranslationPair => {
  const pairs = translationPairs[language];
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
};
