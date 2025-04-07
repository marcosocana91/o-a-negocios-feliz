
export interface TranslationPair {
  design: string;
  business: string;
  marketing: string;
  development: string;
  family: string;
}

export type TranslationCategory = 'business' | 'marketing' | 'development' | 'family';

interface TranslationData {
  es: TranslationPair[];
  en: TranslationPair[];
}

export const translationPairs: TranslationData = {
  es: [
    {
      design: "El layout no hes responsivo.",
      business: "Estás dejando fuera medio internet, colega.",
      marketing: "Tu campaña se ve como un PowerPoint recortado en móvil.",
      development: "¿Probaste esto fuera del monitor de 27 pulgadas o qué?",
      family: "Diseño cosas que se ven bien en cualquier pantallita, no solo en el portátil del trabajo."
    },
    {
      design: "El formulario tiene demasiados campos.",
      business: "Si pides hasta el grupo sanguíneo, nadie se registra.",
      marketing: "Estás matando la conversión con tu obsesión por los datos.",
      development: "Sí, hay que meter validaciones… pero no para el número de zapatos.",
      family: "No, mamá, no hace falta poner el DNI para descargarse una receta."
    },
    {
      design: "No hay jerarquía visual clara.",
      business: "El usuario está más perdido que tú en una reunión de diseño.",
      marketing: "Sin foco visual, no hay ni leads, ni likes, ni ná.",
      development: "No basta con que funcione, tiene que dirigir.",
      family: "Yo pongo orden en la pantalla para que la gente no se raye, ¿vale?"
    },
    {
      design: "La interfaz es demasiado minimalista.",
      business: "Tan simple que el usuario no sabe ni qué hace tu producto.",
      marketing: "No puedes vender algo que ni se entiende visualmente.",
      development: "No, no es un bug. Es que le quitaste TODO pensando que era arte.",
      family: "No, no está \"vacío\". Es que tú no ves lo que yo veo 😎"
    },
    {
      design: "Los colores no siguen la marca.",
      business: "Parece una web de hace 15 años. Y no, eso no es vintage.",
      marketing: "Si no respira marca, no genera confianza.",
      development: "No, no vale poner \"cualquier azul\". Hay un azul nuestro, bro.",
      family: "Sí, los colores importan. Mucho. Como el Betis no puede jugar de rojo."
    },
    {
      design: "Necesitamos espacio en blanco.",
      business: "Sin aire, esto asfixia al usuario (y tus ventas).",
      marketing: "La ansiedad visual no convierte, ni inspira.",
      development: "No es un error de padding, es una decisión estratégica.",
      family: "A veces dejar espacio es diseñar, no es que me haya olvidado de rellenarlo."
    },
    {
      design: "El botón no parece clicable.",
      business: "La gente no compra lo que no sabe usar.",
      marketing: "Sin interacción, tu CTA es solo poesía.",
      development: "No vale con que \"esté ahí\", tiene que gritar \"¡hazme clic!\".",
      family: "No, papá, no es que no funcione. Es que no parece un botón."
    },
    {
      design: "Falta consistencia en los componentes.",
      business: "Cada pantalla parece de una empresa distinta. Mala señal.",
      marketing: "No hay marca sin coherencia visual. Punto.",
      development: "No puedes reinventar el botón en cada vista, tío.",
      family: "Es como poner cubiertos distintos en cada comida. Raro."
    },
    {
      design: "El usuario no entiende el flujo.",
      business: "Estás perdiendo pasta por culpa de la confusión.",
      marketing: "Tu funnel está hecho un laberinto.",
      development: "No se trata solo de pantallas conectadas, sino de sentido común.",
      family: "Es como una receta sin pasos. Un caos."
    },
    {
      design: "No hay feedback visual en las interacciones.",
      business: "El usuario cree que no ha pasado nada. Spoiler: se va.",
      marketing: "Sin respuesta visual, matas la experiencia.",
      development: "Un loader no es opcional, es respeto al usuario.",
      family: "Es como mandar un WhatsApp y que nunca ponga \"enviado\"."
    }
  ],
  en: [
    {
      design: "The layout is not responsive.",
      business: "You're leaving out half the internet, buddy.",
      marketing: "Your campaign looks like a cropped PowerPoint on mobile.",
      development: "Did you test this outside your 27-inch monitor or what?",
      family: "I design things that look good on any screen, not just your work laptop."
    },
    {
      design: "The form has too many fields.",
      business: "If you ask for their blood type, nobody will register.",
      marketing: "You're killing conversion with your data obsession.",
      development: "Yes, we need validations... but not for shoe size.",
      family: "No, mom, you don't need to enter your ID to download a recipe."
    },
    {
      design: "There's no clear visual hierarchy.",
      business: "The user is more lost than you in a design meeting.",
      marketing: "Without visual focus, there are no leads, no likes, nothing.",
      development: "It's not enough for it to work, it has to guide.",
      family: "I organize the screen so people don't get confused, okay?"
    },
    {
      design: "The interface is too minimalist.",
      business: "So simple that users don't even know what your product does.",
      marketing: "You can't sell something that isn't visually understood.",
      development: "No, it's not a bug. You removed EVERYTHING thinking it was art.",
      family: "No, it's not 'empty'. You just don't see what I see 😎"
    },
    {
      design: "The colors don't follow the brand.",
      business: "It looks like a website from 15 years ago. And no, that's not vintage.",
      marketing: "If it doesn't breathe brand, it doesn't build trust.",
      development: "No, you can't just use 'any blue'. We have OUR blue, bro.",
      family: "Yes, colors matter. A lot. Like Manchester United can't play in blue."
    },
    {
      design: "We need white space.",
      business: "Without breathing room, this suffocates users (and your sales).",
      marketing: "Visual anxiety doesn't convert or inspire.",
      development: "It's not a padding error, it's a strategic decision.",
      family: "Sometimes leaving space is designing, not forgetting to fill it."
    },
    {
      design: "The button doesn't look clickable.",
      business: "People don't buy what they don't know how to use.",
      marketing: "Without interaction, your CTA is just poetry.",
      development: "It's not enough for it to 'be there', it needs to scream 'click me!'",
      family: "No, dad, it's not that it doesn't work. It doesn't look like a button."
    },
    {
      design: "There's no consistency in components.",
      business: "Each screen looks like it's from a different company. Bad sign.",
      marketing: "There's no brand without visual coherence. Period.",
      development: "You can't reinvent the button in every view, dude.",
      family: "It's like using different cutlery for each meal. Weird."
    },
    {
      design: "The user doesn't understand the flow.",
      business: "You're losing money because of confusion.",
      marketing: "Your funnel is a maze.",
      development: "It's not just about connected screens, but common sense.",
      family: "It's like a recipe without steps. Chaos."
    },
    {
      design: "There's no visual feedback on interactions.",
      business: "The user thinks nothing happened. Spoiler: they leave.",
      marketing: "Without visual response, you kill the experience.",
      development: "A loader isn't optional, it's respect for the user.",
      family: "It's like sending a text and never seeing 'delivered'."
    }
  ]
};

/**
 * Get a random translation pair that includes translations for all categories
 */
export const getTranslationByCategory = (language: 'es' | 'en', category: TranslationCategory): TranslationPair => {
  const pairs = translationPairs[language];
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
};
