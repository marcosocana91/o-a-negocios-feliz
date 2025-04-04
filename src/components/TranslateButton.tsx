
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TranslateButtonProps {
  onClick: () => void;
  text?: string;
}

const TranslateButton: React.FC<TranslateButtonProps> = ({ 
  onClick, 
  text = "Traducir ahora" 
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
      className={`translate-button flex items-center justify-center gap-2 ${isAnimating ? 'animate-bounce-light' : ''}`}
      onClick={handleClick}
    >
      <span>{text}</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  );
};

export default TranslateButton;
