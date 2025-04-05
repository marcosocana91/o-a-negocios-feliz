
import React, { useState } from 'react';
import { translationPairs } from '../data/translationPairs';
import { ArrowRight } from 'lucide-react';
import FooterBanner from '../components/FooterBanner';
import { useLanguage } from '../context/LanguageContext';

const Quiz: React.FC = () => {
  const { language } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  
  // Prepare quiz data from translation pairs based on current language
  const translationPairsArray = translationPairs[language];
  const quizQuestions = translationPairsArray.slice(0, 10).map(pair => ({
    question: pair.design,
    correctAnswer: pair.business,
    options: [
      pair.business,
      translationPairsArray[Math.floor(Math.random() * translationPairsArray.length)].business,
      translationPairsArray[Math.floor(Math.random() * translationPairsArray.length)].business,
    ].sort(() => Math.random() - 0.5)
  }));
  
  const handleOptionSelect = (option: string) => {
    if (showAnswer) return;
    
    setSelectedOption(option);
    setShowAnswer(true);
    
    if (option === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };
  
  const startQuiz = () => {
    setQuizStarted(true);
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedOption(null);
    setQuizFinished(false);
  };
  
  if (!quizStarted) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-grow container mx-auto px-4 py-16 max-w-3xl flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest border-b-2 border-black pb-4 text-center">
            Quiz
          </h1>
          
          <div className="font-serif text-lg text-center mb-12">
            <p>Pon a prueba tus habilidades de traducción entre diseño y negocio</p>
            <p className="mt-4">¿Puedes identificar la traducción correcta para cada expresión de diseño?</p>
          </div>
          
          <button 
            onClick={startQuiz}
            className="flex items-center justify-center gap-2 py-3 px-10 bg-black text-white font-mono text-md uppercase hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors"
          >
            <span>Comenzar Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <FooterBanner />
      </div>
    );
  }
  
  if (quizFinished) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-grow container mx-auto px-4 py-16 max-w-3xl flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest border-b-2 border-black pb-4 text-center">
            Resultados
          </h1>
          
          <div className="font-serif text-lg text-center mb-12 space-y-6">
            <p className="text-2xl font-bold">Tu puntuación: {score} de {quizQuestions.length}</p>
            
            {score === quizQuestions.length ? (
              <p>¡Perfecto! Eres un auténtico traductor entre diseño y negocio.</p>
            ) : score >= quizQuestions.length * 0.7 ? (
              <p>¡Buen trabajo! Tienes un gran dominio del lenguaje de diseño y negocio.</p>
            ) : (
              <p>¡Sigue practicando! Con el tiempo dominarás ambos lenguajes.</p>
            )}
          </div>
          
          <button 
            onClick={restartQuiz}
            className="flex items-center justify-center gap-2 py-3 px-10 bg-black text-white font-mono text-md uppercase hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors"
          >
            <span>Reiniciar Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
        
        <FooterBanner />
      </div>
    );
  }
  
  const currentQuestion = quizQuestions[currentQuestionIndex];
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-grow container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-widest border-b-2 border-black pb-4">
          Quiz
        </h1>
        
        <div className="mb-6 font-mono uppercase text-sm tracking-wider">
          Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}
        </div>
        
        <div className="font-serif text-xl mb-8 border-2 border-black p-6">
          <div className="mb-2 font-mono uppercase text-sm tracking-wider">Cuando diseño dice:</div>
          <div>{currentQuestion.question}</div>
        </div>
        
        <div className="mb-2 font-mono uppercase text-sm tracking-wider">
          Negocio debería entender:
        </div>
        
        <div className="space-y-4 mb-12">
          {currentQuestion.options.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleOptionSelect(option)}
              className={`border-2 p-6 font-serif text-lg cursor-pointer transition-colors ${
                selectedOption === option 
                  ? option === currentQuestion.correctAnswer
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : "border-black hover:bg-black hover:text-white"
              } ${
                showAnswer && option === currentQuestion.correctAnswer && "border-green-500 bg-green-50"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
        
        {showAnswer && (
          <div className="flex justify-center">
            <button 
              onClick={handleNextQuestion}
              className="flex items-center justify-center gap-2 py-3 px-10 bg-black text-white font-mono text-md uppercase"
            >
              <span>Siguiente</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      
      <FooterBanner />
    </div>
  );
};

export default Quiz;
