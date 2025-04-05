
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TranslateButtonProps {
  onClick: () => void;
  text?: string;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ 
  onClick, 
  text = "Translate" 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    
    // Play sound effect if available
    const audio = new Audio('/translate-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
    
    onClick();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <button 
      className={`flex items-center justify-center gap-2 py-2 px-8 bg-black text-white font-mono text-sm uppercase hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors ${isAnimating ? 'animate-bounce-light' : ''}`}
      onClick={handleClick}
    >
      <span>{text}</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  );
};

export default TranslateButton;
