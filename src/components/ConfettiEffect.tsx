
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface ConfettiEffectProps {
  trigger: boolean;
}

const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ trigger }) => {
  const [isActive, setIsActive] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Track window size changes
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle trigger changes
  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      
      // Set a timeout to hide the confetti after 5 seconds
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return isActive ? (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={true}
      numberOfPieces={200}
      gravity={0.15}
    />
  ) : null;
};

export default ConfettiEffect;
