
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
      }, 5000); // Extended to 5 seconds
      
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
          numberOfPieces={300} // Increased number of pieces
          gravity={0.15} // Reduced gravity to make confetti fall slower
        />
      )}
    </>
  );
};

export default ConfettiEffect;
