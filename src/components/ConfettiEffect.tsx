
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface ConfettiEffectProps {
  trigger: boolean;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ trigger }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    if (trigger) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [trigger]);
  
  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
    </>
  );
};

export default ConfettiEffect;
